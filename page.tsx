import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function ValentineInvite() {
  const [accepted, setAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noCount, setNoCount] = useState(0);

  const handleNo = () => {
    setNoCount((c) => c + 1);
    setYesScale((s) => Math.min(s + 0.25, 2.5));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 p-4">
      <Card className="max-w-md w-full rounded-2xl shadow-xl">
        <CardContent className="p-8 text-center space-y-6">
          {!accepted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Heart className="mx-auto h-12 w-12 text-red-500 animate-pulse" />
              <h1 className="text-2xl font-bold">Hey Love ❤️</h1>
              <p className="text-gray-600">
                Will you be my Valentine?
              </p>

              <div className="flex gap-4 justify-center items-center">
                <motion.div animate={{ scale: yesScale }}>
                  <Button
                    className="text-lg px-6"
                    onClick={() => setAccepted(true)}
                  >
                    Yes 💕
                  </Button>
                </motion.div>

                <Button
                  variant="outline"
                  className="text-lg"
                  onClick={handleNo}
                >
                  No 😅
                </Button>
              </div>

              {noCount > 0 && (
                <p className="text-sm text-gray-500">
                  You pressed “No” {noCount} time{noCount > 1 ? "s" : ""}…
                  the universe strongly disagrees 😌
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold text-red-600">Yay!!! 💖</h1>
              <p className="text-gray-700">
                Best decision ever 💐 I can’t wait to spend Valentine’s with you.
              </p>
              <p className="text-sm text-gray-500">— Love, always</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

