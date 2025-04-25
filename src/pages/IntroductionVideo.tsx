"use client"; // Nécessaire pour utiliser useRouter

import React from 'react';
import { Button } from '@/components/ui/button';
// Supprimé : import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'; // Import correct pour App Router
import VideoPlayer from '@/components/video/VideoPlayer';
import PageLayout from '@/components/layout/PageLayout';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const IntroductionVideo = () => {
  const router = useRouter(); // Utilisation du hook de Next.js

  const handleSkip = () => {
    // Utiliser router.push pour la navigation programmatique
    router.push('/cv');

  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Bienvenue sur votre parcours vers l'emploi</h1>
          <p className="text-lg text-muted-foreground">
            Pour bien commencer, regardez cette courte vidéo qui explique le fonctionnement de la plateforme.
          </p>
        </div>

        <div className="mb-10">
          {/* La fonction handleSkip corrigée sera passée ici */}
          <VideoPlayer onSkip={handleSkip} />
        </div>

        <div className="flex justify-center">
          {/* Cette partie était déjà correcte */}
          <Link href="/cv">
            <Button
              size="lg"
              className="px-6 py-6 text-xl rounded-lg h-auto"
            >
              <span>Commencer mon parcours</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default IntroductionVideo;
