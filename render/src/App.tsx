import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
