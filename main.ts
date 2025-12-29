import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Music, Brain, Terminal, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-cyan-400"
        >
          Abhang Mandwale
        </motion.h1>
        <p className="mt-4 text-xl text-green-300">aka <span className="text-pink-400">krypto knyght</span></p>
        <p className="mt-6 max-w-xl text-green-500">
          Cybersecurity | Bug Bounty | Malware Analysis | Music Producer | ML Explorer
        </p>
        <Button className="mt-8 bg-cyan-500 text-black hover:bg-pink-500">
          <Terminal className="mr-2" /> Access Terminal
        </Button>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl text-cyan-400 mb-6">About</h2>
        <p className="text-green-500 leading-relaxed">
          Computer Engineering graduate with a strong focus on cybersecurity. Incoming MSc Cybersecurity
          student at TU Dublin. I build secure systems, break insecure ones, analyze malware, explore
          machine learning, and produce concept-driven music projects.
        </p>
      </section>

      {/* Domains */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border border-cyan-500">
          <CardContent className="p-6">
            <Shield className="text-cyan-400 mb-4" />
            <h3 className="text-xl mb-2">Cybersecurity</h3>
            <ul className="text-green-500 text-sm space-y-1">
              <li>• Bug Bounty & Web Security</li>
              <li>• Malware Analysis</li>
              <li>• AppSec & Secure Programming</li>
              <li>• TryHackMe / CTFs</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-pink-500">
          <CardContent className="p-6">
            <Music className="text-pink-400 mb-4" />
            <h3 className="text-xl mb-2">Music & Sound</h3>
            <ul className="text-green-500 text-sm space-y-1">
              <li>• Ableton Live</li>
              <li>• Concept Albums & Storytelling</li>
              <li>• Sound Design & Engineering</li>
              <li>• Spotify / Apple Music</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-green-500">
          <CardContent className="p-6">
            <Brain className="text-green-400 mb-4" />
            <h3 className="text-xl mb-2">Machine Learning</h3>
            <ul className="text-green-500 text-sm space-y-1">
              <li>• Python & ML Fundamentals</li>
              <li>• Security + ML Exploration</li>
              <li>• Future Research Focus</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl text-cyan-400 mb-6">Projects</h2>
        <p className="text-green-500">Detailed write-ups, labs, music releases, and experiments coming soon.</p>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-cyan-400 mb-6">Connect</h2>
        <div className="flex justify-center gap-6">
          <Button variant="outline" className="border-cyan-400 text-cyan-400"><Globe /> LinkedIn</Button>
          <Button variant="outline" className="border-pink-400 text-pink-400"><Terminal /> GitHub</Button>
        </div>
      </section>

      <footer className="py-6 text-center text-green-700 text-sm">
        © 2025 // encrypted_identity
      </footer>
    </div>
  );
}
