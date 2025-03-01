'use client';

import ProjectLayout from '@/app/components/ProjectLayout';
import { motion } from 'framer-motion';

export default function RuneWars() {
  return (
    <ProjectLayout
      title="The future of games."
      subtitle="A Vision of Spatial Play"
      nextProject={{
        title: "Between Worlds",
        link: "/work/between-worlds"
      }}
    >
      <section className="space-y-12">
        {/* Project Overview */}
        <div>
          <p className="text-lg text-gray-300">
            Rune Wars is a simple multiplayer combat system helping people connect and exercise in a more engaging way.
            Two people play as warriors battling for their honour.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            Players shoot rune-enforced stones from one hand using a pinch gesture, and use the other hand to raise 
            temporary walls from the ground using a pinch + drag gesture. These walls are destroyed after 5 seconds.
            To win, a player reduce their opponent&apos;s health to zero.
          </p>
        </div>

        {/* Design Process */}
        <div>
          <h2 className="text-2xl font-medium mb-6">Designing for immersion that feels authentic.</h2>
          <p className="text-gray-300 mb-6">
            Our primary goal was to design a novel game tailored specifically for AR devices, an area still largely unexplored. 
            During the 36 hours, I focused on developing the concept, art, and front-end for the game.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-4">Tools &amp; Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Blender + Procreate: created 3D assets</li>
                <li>• Lens Studio: implemented collision detection, gesture tracking</li>
                <li>• Shortstack: state management and animation sequencing</li>
                <li>• Premiere Pro + ElevenLabs: spatial soundscapes</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-4">Key Learnings</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• The medium is the message - AR is always &quot;on&quot;</li>
                <li>• Consider movement within device limits</li>
                <li>• Design for limited viewport in AR</li>
                <li>• Balance between immersion and usability</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Future Vision */}
        <div>
          <h2 className="text-2xl font-medium mb-6">Why AR, Why Now?</h2>
          <p className="text-gray-300">
            Devices like Spectacles mark the beginning of a new era of gaming, where video games could be both social and physical.
            AI could transform AR into a storytelling powerhouse, delivering personalised, contextual experiences at the right moment.
          </p>
          <p className="text-gray-300 mt-4">
            Imagine tools that anticipate our needs, environments that adapt to our presence, and games that teach, inspire, and heal.
            Especially now with AI agents powering anticipatory interfaces, extended reality will no longer be about passively viewing. 
            It will be about doing, feeling, and creating in real time.
          </p>
        </div>
      </section>
    </ProjectLayout>
  );
}
