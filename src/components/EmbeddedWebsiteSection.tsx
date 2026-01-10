import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmbeddedWebsiteSection = () => {
  const [iframeError, setIframeError] = useState(false);
  const websiteUrl = "https://goldenarchi.vn";

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-2">
            Khám Phá Golden Archi
          </h2>
          <p className="text-muted-foreground">
            Xem thêm sản phẩm và dịch vụ của chúng tôi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {!iframeError ? (
            <iframe
              src={websiteUrl}
              title="Golden Archi Website"
              className="w-full h-[80vh] border-0 rounded-lg shadow-lg"
              onError={() => setIframeError(true)}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <div className="w-full h-[80vh] flex flex-col items-center justify-center bg-muted rounded-lg">
              <p className="text-muted-foreground mb-4">
                Không thể tải website. Vui lòng thử mở trong tab mới.
              </p>
              <Button
                onClick={() => window.open(websiteUrl, "_blank")}
                className="bg-gold hover:bg-gold/90 text-navy font-semibold"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Mở website trong tab mới
              </Button>
            </div>
          )}
        </motion.div>

        {/* Always show button as alternative */}
        {!iframeError && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => window.open(websiteUrl, "_blank")}
              className="border-gold text-gold hover:bg-gold hover:text-navy"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Mở trong tab mới
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmbeddedWebsiteSection;
