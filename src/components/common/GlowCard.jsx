import { motion } from "framer-motion";
export default function GlowCard({children,className="",color="#32d8ed"}){
 return <motion.article whileHover={{y:-5,rotateX:1.5,rotateY:-1.5}} transition={{type:"spring",stiffness:260,damping:24}} className={`relative overflow-hidden rounded-2xl border border-sky-900/80 bg-[linear-gradient(145deg,rgba(7,28,49,.96),rgba(3,13,25,.98))] shadow-[0_24px_65px_rgba(0,0,0,.34)] ${className}`} style={{borderTopColor:color,borderTopWidth:3}}><div className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-20" style={{background:`radial-gradient(circle at 50% 0,${color},transparent 70%)`}}/>{children}</motion.article>
}
