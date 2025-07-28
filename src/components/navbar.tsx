"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, MapPin, Compass, Mountain } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", path: "/", icon: Mountain },
    { name: "Destinations", path: "/destinations", icon: MapPin },
    { name: "Tours", path: "/tours", icon: Compass },
    { name: "Contact", path: "/contact", icon: User },
  ]


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 },
    },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren" as const,
        staggerChildren: 0.08,
      },
    },
  }

  const mobileNavLinkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  }

  const hoverVariants = {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 },
  }

  const logoHoverVariants = {
    hover: { scale: 1.1, rotate: 2 },
    tap: { scale: 0.9 },
  }

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg py-3 shadow-lg border-b border-blue-100"
          : "bg-gradient-to-r from-blue-50/80 to-teal-50/80 py-4"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        <Link href="/">
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            variants={logoHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="relative"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Wanderlust
              </motion.span>
              <motion.p
                className="text-xs text-gray-500 -mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Wander & Explore
              </motion.p>
            </motion.div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex space-x-1 items-center bg-white/60 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {navLinks.map((link, index) => {
            const IconComponent = link.icon
            const isActive = pathname === link.path

            return (
              <motion.div
                key={link.path}
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
              >
                <Link href={link.path}>
                  <motion.div
                    className={`nav-link relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="font-medium">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full -z-10"
                        initial={false}
                        transition={{ duration: 0.4, ease: "easeOut" as const }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="lg:hidden bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-sm text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          variants={hoverVariants}
          whileHover="hover"
          whileTap="tap"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-lg border-t border-blue-100 shadow-2xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <motion.div className="space-y-3">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon
                  const isActive = pathname === link.path

                  return (
                    <Link key={link.path} href={link.path}>
                      <motion.div
                        onClick={handleNavClick}
                        className={`mobile-nav-link w-full flex items-center space-x-4 text-left py-4 px-4 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                        variants={mobileNavLinkVariants}
                        whileHover={{
                          x: 8,
                          backgroundColor: isActive ? undefined : "#eff6ff",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{link.name}</span>
                      </motion.div>
                    </Link>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export { Header }
export default Header