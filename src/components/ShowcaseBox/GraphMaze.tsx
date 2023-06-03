import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useMouseDown } from "../../hooks/useMouseDown";
import { Queue } from "../../utils/Queue";
import Button from "../Button/Button";

export interface MazeProps {
  width: number;
  height: number;
}

export enum NodeType {
  EMPTY,
  BLOCKED,
  VISITED,
  DESTINATION,
  SOURCE,
}

export interface Point {
  x: number;
  y: number;
}

export interface VisualOptions {
  speed: number;
}

export default function GraphMaze(props: MazeProps) {
  const [source, setSource] = useState<Point>({ x: 0, y: 0 });
  const [destination, setDestination] = useState<Point>({ x: 0, y: 0 });
  const [isMouseDown] = useMouseDown();
  const [visualAbortController, setVisualAbortController] =
    useState<AbortController>(new AbortController());
  const [visualOptions, setVisualOptions] = useState<VisualOptions>({
    speed: 1,
  });
  // Generate two-dimension arr
  const [graph, setGraph] = useState<NodeType[][]>(
    [...new Array(props.height)].fill(
      [...new Array(props.width)].fill(NodeType.EMPTY)
    )
  );
  const [estimateDistance, setEstimateDistance] = useState<number>(0);

  useEffect(() => {
    updateSource(props.width / 4, props.height / 4);
    updateDestination(props.width / 2, props.height / 2);

    for (let y = 0; y < props.height; y++) {
      setNodeType(props.width / 2 - 6, y, NodeType.BLOCKED);
    }

    setNodeType(props.width / 2 - 6, props.height / 2, NodeType.EMPTY);
  }, []);

  useEffect(() => {
    setEstimateDistance(distance(source, destination));
  }, [source, destination]);

  const setNodeType = (x: number, y: number, type: NodeType) => {
    setGraph((g) => [
      ...g.map((yElement, yIndex) =>
        yElement.map((_xElement, xIndex) => {
          if (xIndex === x && yIndex === y) {
            return type;
          }
          return g[yIndex][xIndex];
        })
      ),
    ]);
  };

  const getNodeType: (x: number, y: number) => NodeType = (
    x: number,
    y: number
  ) => {
    return graph[y][x];
  };

  const handleCreateBlockEvent = (x: number, y: number) => {
    setNodeType(
      x,
      y,
      getNodeType(x, y) === NodeType.EMPTY ? NodeType.BLOCKED : NodeType.EMPTY
    );
  };

  const bfs = (
    source: Point,
    destination: Point,
    controller?: AbortController
  ) => {
    const visited: boolean[][] = Array.from(Array(props.width), () =>
      Array(props.height).fill(false)
    );

    const q: Queue.ArrayQueue<Point> = new Queue.ArrayQueue();
    q.enqueue(source);

    visited[source.y][source.x] = true;
    const mx = [-1, 0, 1, 0];
    const my = [0, 1, 0, -1];

    if (controller === undefined) {
      controller = new AbortController();
    }
    const intervalId = setInterval(() => {
      if (controller?.signal?.aborted) {
        clearInterval(intervalId);
        return;
      }
      const { x: curX, y: curY } = q.dequeue();

      if (curX === destination.x && curY === destination.y) {
        // isBreak = true;
        controller?.abort();
      }

      for (let i = 0; i < mx.length; i++) {
        const dX = curX + mx[i];
        const dY = curY + my[i];
        // console.log(dX, dY);

        if (dX < 0 || dX >= props.width) continue;
        if (dY < 0 || dY >= props.height) continue;
        // console.log(dX, dX, visited[dY][dX]);
        if (visited[dY][dX]) {
          continue;
        }

        if (getNodeType(dX, dY) === NodeType.BLOCKED) continue;

        // Mark
        visited[dY][dX] = true;
        q.enqueue({ x: dX, y: dY });
        if (getNodeType(dX, dY) !== NodeType.DESTINATION)
          setNodeType(dX, dY, NodeType.VISITED);
      }
    }, visualOptions.speed);
  };

  const distance = (a: Point, b: Point) => {
    const x = b.x - a.x;
    const y = b.y - a.y;
    return Math.sqrt(x * x + y * y);
  };

  const findShortestAStar = (
    source: Point,
    destination: Point,
    controller?: AbortController
  ) => {
    console.log(`Evaluating path using A *`);
    // Setup a closed list
    const closed: boolean[][] = new Array(props.height);
    for (let i = 0; i < props.height; i++) {
      closed[i] = new Array(props.width).fill(false);
    }

    const detail: { g: number; h: number; f: number; parent: Point }[][] =
      new Array(props.height);
    for (let i = 0; i < props.height; i++) {
      detail[i] = new Array(props.width).fill({
        g: Number.MAX_SAFE_INTEGER,
        h: Number.MAX_SAFE_INTEGER,
        f: Number.MAX_SAFE_INTEGER,
        parent: {
          x: -1,
          y: -1,
        },
      });
    }

    const openQueue: Queue.PriorityQueue<{ point: Point; factor: number }> =
      new Queue.PriorityQueue((a, b) => a.factor < b.factor);
    openQueue.enqueue({ point: { x: source.x, y: source.y }, factor: 0 });

    detail[source.y][source.x] = {
      g: 0,
      h: 0,
      f: 0,
      parent: {
        x: 0,
        y: 0,
      },
    };

    const vDirection = [-1, 0, 1, 0, -1, 1, 1, -1];
    const hDirection = [0, 1, 0, -1, 1, 1, -1, -1];

    let intervalId = setInterval(() => {
      if (openQueue.isEmpty() || (controller && controller.signal.aborted)) {
        clearInterval(intervalId);
      }

      const p = openQueue.dequeue();
      closed[p.point.y][p.point.x] = true;

      // Find neighbor
      for (let i = 0; i < vDirection.length; i++) {
        const nextPoint: Point = {
          x: p.point.x + vDirection[i],
          y: p.point.y + hDirection[i],
        };

        if (nextPoint.x === destination.x && nextPoint.y === destination.y) {
          clearInterval(intervalId);
          return;
        }

        // Boundaries assert
        if (nextPoint.x < 0 || nextPoint.x >= props.width) continue;
        if (nextPoint.y < 0 || nextPoint.y >= props.height) continue;

        if (closed[nextPoint.y][nextPoint.x]) {
          continue;
        }
        if (getNodeType(nextPoint.x, nextPoint.y) === NodeType.BLOCKED) {
          continue;
        }
        // Factor properties
        const gFactor = detail[p.point.y][p.point.x].g + 1;
        const hFactor = distance(nextPoint, destination);
        const fFactor = gFactor + hFactor;

        if (
          detail[nextPoint.y][nextPoint.x].f === Number.MAX_SAFE_INTEGER ||
          detail[nextPoint.y][nextPoint.x].f > fFactor
        ) {
          openQueue.enqueue({ point: nextPoint, factor: fFactor });
          detail[nextPoint.y][nextPoint.x] = {
            h: hFactor,
            g: gFactor,
            f: fFactor,

            parent: {
              x: p.point.x,
              y: p.point.y,
            },
          };
          setNodeType(nextPoint.x, nextPoint.y, NodeType.VISITED);
          // console.log(openQueue);
        }
      }
    }, visualOptions.speed);
  };

  const resetGraph = () => {
    setGraph(
      [...graph].map((k) =>
        k.map((type) => {
          if (type === NodeType.VISITED) {
            return NodeType.EMPTY;
          }
          return type;
        })
      )
    );
  };

  const updateDestination = (x: number, y: number) => {
    const { x: oldX, y: oldY } = destination;

    setNodeType(oldX, oldY, NodeType.EMPTY);
    setNodeType(x, y, NodeType.DESTINATION);

    setDestination({ x, y });
  };

  const updateSource = (x: number, y: number) => {
    const { x: oldX, y: oldY } = source;

    setNodeType(oldX, oldY, NodeType.EMPTY);
    setNodeType(x, y, NodeType.SOURCE);

    setSource({ x, y });
  };

  return (
    <div className={classNames(`flex flex-col items-center py-4`)}>
      {graph.map((y, _yIndex) => {
        return (
          <div
            key={`y` + _yIndex}
            className={`maze-rows m-0 p-0 flex first:border-t last:border-b border-neutral-700`}
          >
            {y.map((x, _xIndex) => {
              return (
                <div
                  key={`x` + _xIndex}
                  className={classNames(
                    `inline-block hover:bg-neutral-600 h-4 w-4 relative first:border-l last:border-r border-neutral-700`,
                    {
                      "bg-red-500 hover:bg-red-400 ": x === NodeType.BLOCKED,
                    }
                  )}
                  onClick={() => {
                    handleCreateBlockEvent(_xIndex, _yIndex);
                  }}
                  onMouseOver={() => {
                    if (isMouseDown) {
                      handleCreateBlockEvent(_xIndex, _yIndex);
                    }
                  }}
                  // Disable dragging
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                  onDoubleClick={() => {
                    // alert(`double click`);
                    updateSource(_xIndex, _yIndex);
                  }}
                  // Right click is disabled
                  onContextMenu={(e) => {
                    e.preventDefault();
                    updateDestination(_xIndex, _yIndex);
                  }}
                >
                  {(x === NodeType.VISITED ||
                    x === NodeType.DESTINATION ||
                    x === NodeType.SOURCE) && (
                    <div
                      className={classNames(
                        `absolute h-2 w-2 top-1/4 left-1/4`,
                        `rounded-full `,
                        {
                          "bg-yellow-600 bg-opacity-25": x === NodeType.VISITED,
                          "bg-green-600": x === NodeType.DESTINATION,
                          "bg-blue-600": x === NodeType.SOURCE,
                        }
                      )}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Description */}
      <div className={classNames(`flex flex-col`, `text-sm my-4`)}>
        <div className={classNames(`flex flex-row gap-4`)}>
          {/* Block item */}
          <div className={classNames(`flex flex-row items-center gap-2`)}>
            <span
              className={classNames(
                `inline-block hover:bg-neutral-600 h-4 w-4 relative first:border-l last:border-r border-neutral-700`,
                "bg-red-500 hover:bg-red-400 "
              )}
            ></span>
            <div className={classNames(`flex flex-col`)}>
              <p>Block item </p>
              <span className={classNames(`text-neutral-500`)}>Left mouse</span>
            </div>
          </div>

          {/* Start position */}
          <div className={classNames(`flex flex-row items-center gap-2`)}>
            <span
              className={classNames(
                `inline-block hover:bg-neutral-600 h-4 w-4 relative border-neutral-700`
              )}
            >
              <div
                className={classNames(
                  `absolute h-2 w-2 top-1/4 left-1/4`,
                  `rounded-full bg-blue-500`
                )}
              ></div>
            </span>
            <div className={classNames(`flex flex-col`)}>
              <p>Start position</p>
              <span className={classNames(`text-neutral-500`)}>
                Left Double-Click
              </span>
            </div>
          </div>

          {/* End position */}
          <div className={classNames(`flex flex-row items-center gap-2`)}>
            <span
              className={classNames(
                `inline-block hover:bg-neutral-600 h-4 w-4 relative border-neutral-700`
              )}
            >
              <div
                className={classNames(
                  `absolute h-2 w-2 top-1/4 left-1/4`,
                  `rounded-full bg-green-500`
                )}
              ></div>
            </span>
            <div className={classNames(`flex flex-col`)}>
              <p>End position</p>
              <span className={classNames(`text-neutral-500`)}>
                Right click
              </span>
            </div>
          </div>

          {/* Visited position */}
          <div className={classNames(`flex flex-row items-center gap-2`)}>
            <span
              className={classNames(
                `inline-block hover:bg-neutral-600 h-4 w-4 relative border-neutral-700`
              )}
            >
              <div
                className={classNames(
                  `absolute h-2 w-2 top-1/4 left-1/4`,
                  `rounded-full bg-yellow-500 bg-opacity-40`
                )}
              ></div>
            </span>
            <div className={classNames(`flex flex-col`)}>
              <p>Visited position</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center text-neutral-500">
        <div className={`text-sm`}>
          <span></span>
          <span>Distance: {estimateDistance.toFixed(2)}</span>
          <span> points</span>
        </div>
        <Button onClick={() => resetGraph()} text="Reset" />
        {/* <button>Maze</button> */}
        <Button
          text={"BFS"}
          onClick={() => {
            resetGraph();
            setVisualAbortController(new AbortController());
            bfs(source, destination, visualAbortController);
          }}
        />

        <Button
          text={"A *"}
          onClick={() => {
            resetGraph();
            setVisualAbortController(new AbortController());
            findShortestAStar(source, destination, visualAbortController);
          }}
        />
      </div>
    </div>
  );
}
