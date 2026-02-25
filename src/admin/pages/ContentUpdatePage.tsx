import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Save } from "lucide-react";
import { motion } from "motion/react";

type Pillar = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

type LibraryItem = {
  title: string;
  category: string;
  image: string;
  duration: string;
};

type Goal = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  desc: string;
};

type WellnessVideo = {
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
};

type GamifiedFeature = {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
  color: string;
};

type InspirationQuote = {
  id: number;
  image: string;
  quote: string;
  author: string;
};

export function ContentUpdatePage() {
  // What is Nirvaha sections
  const [pillars, setPillars] = useState<Pillar[]>([
    {
      id: "01",
      title: "Systemic Diagnostics",
      desc: "We analyze your organizational pulse through confidential, culturally-aware assessments to identify latent stressors.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "02",
      title: "Scalable Protocols",
      desc: "Deployment of curated wellness frameworks that adapt to team size, location, and operational intensity.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "03",
      title: "Leadership Synergy",
      desc: "Equipping managers with high-EQ toolkits to foster psychological safety and resilient decision-making.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "04",
      title: "Cultural Integration",
      desc: "Weaving emotional intelligence into the daily fabric of operations, transforming wellness from a perk to a practice.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "05",
      title: "Impact & ROI",
      desc: "Real-time analytics measuring engagement, retention shifts, and emotional capital growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
  ]);

  // Library items
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([
    { title: "Meditation", category: "Mindfulness", image: "/services/meditation.png", duration: "10 min" },
    { title: "Sleep Stories", category: "Rest", image: "/services/sound_healing.png", duration: "25 min" },
    { title: "Ancient Wisdom", category: "Philosophy", image: "/Book.png", duration: "Series" },
    { title: "Breathwork", category: "Practice", image: "/services/BF.png", duration: "5 min" },
    { title: "Sound Healing", category: "Therapy", image: "/services/sound_healing.png", duration: "45 min" },
    { title: "Zen Chat", category: "AI Companion", image: "/services/zenchat.png", duration: "Unlimited" },
  ]);

  // Why Ancient Wisdom goals
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: "INNER PEACE",
      subtitle: "I'm looking to find",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
      desc: "Calm the mind and soothe the soul through mindful meditation and breathwork.",
    },
    {
      id: 2,
      title: "EMOTIONAL HEALING",
      subtitle: "I'm looking for",
      image: "https://images.unsplash.com/photo-1499209974431-2761386a123d?q=80&w=800&auto=format&fit=crop",
      desc: "Process emotions and find balance with ancient healing practices.",
    },
    {
      id: 3,
      title: "PHYSICAL VITALITY",
      subtitle: "I'm looking to boost",
      image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop",
      desc: "Energize the body and spirit with holistic wellness techniques.",
    },
    {
      id: 4,
      title: "SPIRITUAL CONNECTION",
      subtitle: "I'm looking for a",
      image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800&auto=format&fit=crop",
      desc: "Deepen connection to self and universe through sacred wisdom.",
    },
    {
      id: 5,
      title: "STRESS RELIEF",
      subtitle: "I'm seeking",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      desc: "Release tension and restore harmony with proven relaxation methods.",
    },
  ]);

  // Wellness OTT videos
  const [wellnessVideos, setWellnessVideos] = useState<WellnessVideo[]>([
    {
      title: "Morning Calm",
      category: "Meditation",
      duration: "10 min",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Deep Sleep Guide",
      category: "Sleep",
      duration: "45 min",
      thumbnail: "https://images.unsplash.com/photo-1511296933631-18b520a86d8b?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Anxiety Relief",
      category: "Stress",
      duration: "20 min",
      thumbnail: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Focus Flow",
      category: "Productivity",
      duration: "30 min",
      thumbnail: "https://images.unsplash.com/photo-1499209974431-2761386a123d?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Chakra Balance",
      category: "Energy",
      duration: "15 min",
      thumbnail: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=600&auto=format&fit=crop",
    },
  ]);

  // Gamified wellness features
  const [gamifiedFeatures, setGamifiedFeatures] = useState<GamifiedFeature[]>([
    {
      id: "mind-maze",
      title: "Mind Maze",
      category: "Cognitive Focus",
      description: "Sharpen your attention span with adaptive 3D puzzles that evolve as you improve.",
      benefits: ["Boosts focus by 40%", "Adaptive difficulty"],
      image: "/gaming/mind-maze.png",
      color: "bg-indigo-500",
    },
    {
      id: "zen-flow",
      title: "Zen Flow",
      category: "Stress Reduction",
      description: "Sync your breathing and movement in this biofeedback-integrated rhythm game.",
      benefits: ["Lowers cortisol", "Heart-rate sync"],
      image: "/gaming/zen-flow.png",
      color: "bg-emerald-500",
    },
    {
      id: "soul-quest",
      title: "Soul Quest",
      category: "Personal Growth",
      description: "An RPG where your character levels up when you complete real-world wellness habits.",
      benefits: ["Habit building", "Character customization"],
      image: "/gaming/soul-quest.png",
      color: "bg-amber-500",
    },
    {
      id: "spirit-duel",
      title: "Spirit Duel",
      category: "Team Building",
      description: "Connect with colleagues in friendly, high-energy challenges designed to energize teams.",
      benefits: ["Social bonding", "Team leaderboards"],
      image: "/gaming/spirit-duel.png",
      color: "bg-rose-500",
    },
  ]);

  // Daily inspiration quotes
  const [inspirationQuotes, setInspirationQuotes] = useState<InspirationQuote[]>([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=600&auto=format&fit=crop",
      quote: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600&auto=format&fit=crop",
      quote: "The only journey is the one within.",
      author: "Rainer Maria Rilke",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      quote: "Quiet the mind, and the soul will speak.",
      author: "Ma Jaya Sati Bhagavati",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      quote: "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
      author: "Caroline Myss",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop",
      quote: "Look deep into nature, and then you will understand everything better.",
      author: "Albert Einstein",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=600&auto=format&fit=crop",
      quote: "The best way to find yourself is to lose yourself in the service of others.",
      author: "Mahatma Gandhi",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop",
      quote: "Happiness is not something readymade. It comes from your own actions.",
      author: "Dalai Lama",
    },
  ]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedPillars = localStorage.getItem("nirvaha_pillars");
    const savedLibrary = localStorage.getItem("nirvaha_library");
    const savedGoals = localStorage.getItem("nirvaha_goals");
    const savedWellnessVideos = localStorage.getItem("nirvaha_dashboard_ott");
    const savedGamifiedFeatures = localStorage.getItem("nirvaha_dashboard_gamified");
    const savedInspirationQuotes = localStorage.getItem("nirvaha_dashboard_inspiration");

    if (savedPillars) {
      try {
        setPillars(JSON.parse(savedPillars));
      } catch (e) {
        console.error("Failed to load pillars from localStorage", e);
      }
    }

    if (savedLibrary) {
      try {
        setLibraryItems(JSON.parse(savedLibrary));
      } catch (e) {
        console.error("Failed to load library from localStorage", e);
      }
    }

    if (savedGoals) {
      try {
        setGoals(JSON.parse(savedGoals));
      } catch (e) {
        console.error("Failed to load goals from localStorage", e);
      }
    }

    if (savedWellnessVideos) {
      try {
        setWellnessVideos(JSON.parse(savedWellnessVideos));
      } catch (e) {
        console.error("Failed to load wellness videos from localStorage", e);
      }
    }

    if (savedGamifiedFeatures) {
      try {
        setGamifiedFeatures(JSON.parse(savedGamifiedFeatures));
      } catch (e) {
        console.error("Failed to load gamified features from localStorage", e);
      }
    }

    if (savedInspirationQuotes) {
      try {
        setInspirationQuotes(JSON.parse(savedInspirationQuotes));
      } catch (e) {
        console.error("Failed to load inspiration quotes from localStorage", e);
      }
    }
  }, []);

  // Save to localStorage
  const savePillars = () => {
    localStorage.setItem("nirvaha_pillars", JSON.stringify(pillars));
    alert("What is Nirvaha sections saved successfully!");
  };

  const saveLibraryItems = () => {
    localStorage.setItem("nirvaha_library", JSON.stringify(libraryItems));
    alert("Explore Our Learning sections saved successfully!");
  };

  const saveGoals = () => {
    localStorage.setItem("nirvaha_goals", JSON.stringify(goals));
    alert("Why Ancient Wisdom? sections saved successfully!");
  };

  const saveWellnessVideos = () => {
    localStorage.setItem("nirvaha_dashboard_ott", JSON.stringify(wellnessVideos));
    alert("Wellness OTT section saved successfully!");
  };

  const saveGamifiedFeatures = () => {
    localStorage.setItem("nirvaha_dashboard_gamified", JSON.stringify(gamifiedFeatures));
    alert("Gamified Wellness section saved successfully!");
  };

  const saveInspirationQuotes = () => {
    localStorage.setItem("nirvaha_dashboard_inspiration", JSON.stringify(inspirationQuotes));
    alert("Daily Inspiration section saved successfully!");
  };

  // Pillar handlers
  const updatePillar = (id: string, field: string, value: string) => {
    setPillars(
      pillars.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  const deletePillar = (id: string) => {
    if (pillars.length > 1) {
      setPillars(pillars.filter((p) => p.id !== id));
    } else {
      alert("You must keep at least one pillar");
    }
  };

  const addPillar = () => {
    const newId = (Math.max(...pillars.map((p) => parseInt(p.id))) + 1).toString().padStart(2, "0");
    setPillars([
      ...pillars,
      {
        id: newId,
        title: "New Pillar",
        desc: "Description here",
        image: "https://placehold.co/600x400/e2e8f0/1a5d47?text=New+Pillar",
      },
    ]);
  };

  // Library handlers
  const updateLibraryItem = (index: number, field: string, value: string) => {
    const updated = [...libraryItems];
    updated[index] = { ...updated[index], [field]: value };
    setLibraryItems(updated);
  };

  const deleteLibraryItem = (index: number) => {
    if (libraryItems.length > 1) {
      setLibraryItems(libraryItems.filter((_, i) => i !== index));
    } else {
      alert("You must keep at least one library item");
    }
  };

  const addLibraryItem = () => {
    setLibraryItems([
      ...libraryItems,
      {
        title: "New Item",
        category: "Category",
        image: "https://placehold.co/600x400/e2e8f0/1a5d47?text=New+Item",
        duration: "Duration",
      },
    ]);
  };

  // Goal handlers
  const updateGoal = (
    id: number,
    field: keyof Goal,
    value: string | number
  ) => {
    setGoals(
      goals.map((goal) => (goal.id === id ? { ...goal, [field]: value } : goal))
    );
  };

  const deleteGoal = (id: number) => {
    if (goals.length > 1) {
      setGoals(goals.filter((goal) => goal.id !== id));
    } else {
      alert("You must keep at least one goal");
    }
  };

  const addGoal = () => {
    const newId = Math.max(...goals.map((g) => g.id), 0) + 1;
    setGoals([
      ...goals,
      {
        id: newId,
        title: "New Goal",
        subtitle: "I'm looking to find",
        image: "https://placehold.co/600x400/e2e8f0/1a5d47?text=New+Goal",
        desc: "Goal description",
      },
    ]);
  };

  // Wellness OTT handlers
  const updateWellnessVideo = (
    index: number,
    field: keyof WellnessVideo,
    value: string
  ) => {
    const updated = [...wellnessVideos];
    updated[index] = { ...updated[index], [field]: value };
    setWellnessVideos(updated);
  };

  const deleteWellnessVideo = (index: number) => {
    if (wellnessVideos.length > 1) {
      setWellnessVideos(wellnessVideos.filter((_, i) => i !== index));
    } else {
      alert("You must keep at least one video");
    }
  };

  const addWellnessVideo = () => {
    setWellnessVideos([
      ...wellnessVideos,
      {
        title: "New Video",
        category: "Category",
        duration: "10 min",
        thumbnail: "https://placehold.co/600x800/e2e8f0/1a5d47?text=Video",
      },
    ]);
  };

  // Gamified wellness handlers
  const updateGamifiedFeature = (
    id: string,
    field: keyof GamifiedFeature,
    value: string | string[]
  ) => {
    setGamifiedFeatures(
      gamifiedFeatures.map((feature) =>
        feature.id === id ? { ...feature, [field]: value } : feature
      )
    );
  };

  const deleteGamifiedFeature = (id: string) => {
    if (gamifiedFeatures.length > 1) {
      setGamifiedFeatures(gamifiedFeatures.filter((feature) => feature.id !== id));
    } else {
      alert("You must keep at least one feature");
    }
  };

  const addGamifiedFeature = () => {
    const newId = `feature-${Date.now()}`;
    setGamifiedFeatures([
      ...gamifiedFeatures,
      {
        id: newId,
        title: "New Feature",
        category: "Category",
        description: "Feature description",
        benefits: ["Benefit 1", "Benefit 2"],
        image: "https://placehold.co/800x600/e2e8f0/1a5d47?text=Feature",
        color: "bg-emerald-500",
      },
    ]);
  };

  // Daily inspiration handlers
  const updateInspirationQuote = (
    id: number,
    field: keyof InspirationQuote,
    value: string | number
  ) => {
    setInspirationQuotes(
      inspirationQuotes.map((quote) =>
        quote.id === id ? { ...quote, [field]: value } : quote
      )
    );
  };

  const deleteInspirationQuote = (id: number) => {
    if (inspirationQuotes.length > 1) {
      setInspirationQuotes(inspirationQuotes.filter((quote) => quote.id !== id));
    } else {
      alert("You must keep at least one quote");
    }
  };

  const addInspirationQuote = () => {
    const newId = Math.max(...inspirationQuotes.map((q) => q.id), 0) + 1;
    setInspirationQuotes([
      ...inspirationQuotes,
      {
        id: newId,
        image: "https://placehold.co/600x800/e2e8f0/1a5d47?text=Quote",
        quote: "New quote text",
        author: "Author",
      },
    ]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Landing & Dashboard Content Management</h1>
        <p className="text-gray-700">
          Update images, titles, and descriptions for landing page and dashboard sections
        </p>
      </div>

      <Tabs defaultValue="pillars" className="w-full">
        <div className="space-y-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <h2 className="text-lg font-semibold text-slate-900">Landing Page</h2>
            </div>
            <TabsList className="flex flex-wrap w-full gap-2 justify-start">
              <TabsTrigger value="pillars" className="text-sm md:text-base whitespace-nowrap">
                What is Nirvaha (5 Pillars)
              </TabsTrigger>
              <TabsTrigger value="library" className="text-sm md:text-base whitespace-nowrap">
                Explore Our Learning (Library)
              </TabsTrigger>
              <TabsTrigger value="goals" className="text-sm md:text-base whitespace-nowrap">
                Why Ancient Wisdom (Goals)
              </TabsTrigger>
            </TabsList>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <h2 className="text-lg font-semibold text-slate-900">User Dashboard</h2>
            </div>
            <TabsList className="flex flex-wrap w-full gap-2 justify-start">
              <TabsTrigger value="wellness-ott" className="text-sm md:text-base whitespace-nowrap">
                Wellness OTT
              </TabsTrigger>
              <TabsTrigger value="gamified" className="text-sm md:text-base whitespace-nowrap">
                Gamified Wellness
              </TabsTrigger>
              <TabsTrigger value="inspiration" className="text-sm md:text-base whitespace-nowrap">
                Daily Inspiration
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* What is Nirvaha Section */}
        <TabsContent value="pillars" className="space-y-6">
          <div className="space-y-4 mb-6">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="bg-white border-emerald-200 p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">Pillar {pillar.id}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deletePillar(pillar.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Image Preview */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Image URL</label>
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/600x400/e2e8f0/1a5d47?text=Image";
                        }}
                      />
                      <input
                        type="text"
                        value={pillar.image}
                        onChange={(e) => updatePillar(pillar.id, "image", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        placeholder="Image URL"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Title</label>
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => updatePillar(pillar.id, "title", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Pillar title"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Description</label>
                        <textarea
                          value={pillar.desc}
                          onChange={(e) => updatePillar(pillar.id, "desc", e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                          placeholder="Pillar description"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={addPillar}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Pillar
            </Button>
            <Button
              onClick={savePillars}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </TabsContent>

        {/* Explore Our Learning Section */}
        <TabsContent value="library" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {libraryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="bg-white border-emerald-200 p-4 space-y-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteLibraryItem(index)}
                    className="absolute top-2 right-2 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>

                  {/* Image Preview */}
                  <div className="space-y-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg border border-gray-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/400x300/e2e8f0/1a5d47?text=Item";
                      }}
                    />
                    <input
                      type="text"
                      value={item.image}
                      onChange={(e) => updateLibraryItem(index, "image", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Image URL"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs font-medium text-gray-700 block mb-1">Title</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => updateLibraryItem(index, "title", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Item title"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-700 block mb-1">Category</label>
                      <input
                        type="text"
                        value={item.category}
                        onChange={(e) => updateLibraryItem(index, "category", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Category"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-gray-700 block mb-1">Duration</label>
                      <input
                        type="text"
                        value={item.duration}
                        onChange={(e) => updateLibraryItem(index, "duration", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Duration"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={addLibraryItem}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Item
            </Button>
            <Button
              onClick={saveLibraryItems}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </TabsContent>

        {/* Why Ancient Wisdom Goals Section */}
        <TabsContent value="goals" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {goals.map((goal) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="bg-white border-emerald-200 p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">Goal {goal.id}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteGoal(goal.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Image Preview */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Image URL</label>
                      <img
                        src={goal.image}
                        alt={goal.title}
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/600x400/e2e8f0/1a5d47?text=Image";
                        }}
                      />
                      <input
                        type="text"
                        value={goal.image}
                        onChange={(e) => updateGoal(goal.id, "image", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        placeholder="Image URL"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Title</label>
                        <input
                          type="text"
                          value={goal.title}
                          onChange={(e) => updateGoal(goal.id, "title", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Goal title"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Subtitle</label>
                        <input
                          type="text"
                          value={goal.subtitle}
                          onChange={(e) => updateGoal(goal.id, "subtitle", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Goal subtitle"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Description</label>
                        <textarea
                          value={goal.desc}
                          onChange={(e) => updateGoal(goal.id, "desc", e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                          placeholder="Goal description"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={addGoal}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Goal
            </Button>
            <Button
              onClick={saveGoals}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </TabsContent>

        {/* Wellness OTT Section */}
        <TabsContent value="wellness-ott" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {wellnessVideos.map((video, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="bg-white border-emerald-200 p-4 space-y-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteWellnessVideo(index)}
                    className="absolute top-2 right-2 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>

                  <div className="space-y-2">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-44 object-cover rounded-lg border border-gray-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/600x800/e2e8f0/1a5d47?text=Video";
                      }}
                    />
                    <input
                      type="text"
                      value={video.thumbnail}
                      onChange={(e) => updateWellnessVideo(index, "thumbnail", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Thumbnail URL"
                    />
                  </div>

                  <div className="space-y-2">
                    <div>
                      <label className="text-xs font-medium text-gray-700 block mb-1">Title</label>
                      <input
                        type="text"
                        value={video.title}
                        onChange={(e) => updateWellnessVideo(index, "title", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Video title"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-700 block mb-1">Category</label>
                      <input
                        type="text"
                        value={video.category}
                        onChange={(e) => updateWellnessVideo(index, "category", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Category"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-700 block mb-1">Duration</label>
                      <input
                        type="text"
                        value={video.duration}
                        onChange={(e) => updateWellnessVideo(index, "duration", e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Duration"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={addWellnessVideo}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Video
            </Button>
            <Button
              onClick={saveWellnessVideos}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </TabsContent>

        {/* Gamified Wellness Section */}
        <TabsContent value="gamified" className="space-y-6">
          <div className="space-y-6 mb-6">
            {gamifiedFeatures.map((feature) => (
              <motion.div key={feature.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="bg-white border-emerald-200 p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">Feature</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteGamifiedFeature(feature.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Image URL</label>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/800x600/e2e8f0/1a5d47?text=Feature";
                        }}
                      />
                      <input
                        type="text"
                        value={feature.image}
                        onChange={(e) => updateGamifiedFeature(feature.id, "image", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        placeholder="Image URL"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Title</label>
                        <input
                          type="text"
                          value={feature.title}
                          onChange={(e) => updateGamifiedFeature(feature.id, "title", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Feature title"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Category</label>
                        <input
                          type="text"
                          value={feature.category}
                          onChange={(e) => updateGamifiedFeature(feature.id, "category", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Category"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Description</label>
                        <textarea
                          value={feature.description}
                          onChange={(e) => updateGamifiedFeature(feature.id, "description", e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                          placeholder="Feature description"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Benefits (one per line)</label>
                        <textarea
                          value={feature.benefits.join("\n")}
                          onChange={(e) =>
                            updateGamifiedFeature(
                              feature.id,
                              "benefits",
                              e.target.value
                                .split("\n")
                                .map((benefit) => benefit.trim())
                                .filter(Boolean)
                            )
                          }
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                          placeholder="Benefit 1\nBenefit 2"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Accent Color</label>
                        <input
                          type="text"
                          value={feature.color}
                          onChange={(e) => updateGamifiedFeature(feature.id, "color", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="bg-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={addGamifiedFeature}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Feature
            </Button>
            <Button
              onClick={saveGamifiedFeatures}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </TabsContent>

        {/* Daily Inspiration Section */}
        <TabsContent value="inspiration" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {inspirationQuotes.map((quote) => (
              <motion.div key={quote.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="bg-white border-emerald-200 p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">Quote {quote.id}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteInspirationQuote(quote.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Image URL</label>
                      <img
                        src={quote.image}
                        alt={quote.author}
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/600x800/e2e8f0/1a5d47?text=Quote";
                        }}
                      />
                      <input
                        type="text"
                        value={quote.image}
                        onChange={(e) => updateInspirationQuote(quote.id, "image", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        placeholder="Image URL"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Quote</label>
                        <textarea
                          value={quote.quote}
                          onChange={(e) => updateInspirationQuote(quote.id, "quote", e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                          placeholder="Quote text"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Author</label>
                        <input
                          type="text"
                          value={quote.author}
                          onChange={(e) => updateInspirationQuote(quote.id, "author", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Author"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={addInspirationQuote}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Quote
            </Button>
            <Button
              onClick={saveInspirationQuotes}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}