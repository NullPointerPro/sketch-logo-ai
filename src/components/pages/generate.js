import { useState, useRef } from "react";
import { Upload, Image, Sparkles } from "lucide-react";

export default function Generate() {
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [sketch, setSketch] = useState(null);
  const [style, setStyle] = useState("Modern");
  const [color, setColor] = useState("#2EC4B6");
  const [layout, setLayout] = useState("Icon + Text");
  const [font, setFont] = useState("Sans-serif");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleSketchUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSketch(URL.createObjectURL(file));
    }
  };

  const generateLogos = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('brandName', brandName);
      formData.append('description', description);
      formData.append('style', style);
      formData.append('color', color);
      formData.append('layout', layout);
      formData.append('font', font);
      
      if (sketch) {
        const response = await fetch(sketch);
        const blob = await response.blob();
        formData.append('sketch', blob);
      }

      const res = await fetch("/api/generateLogo", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      setImages(data.images || []);
    } catch (error) {
      console.error('Error generating logos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Generate Your AI Logo</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Brand Name</label>
              <input
                type="text"
                className="w-full border-input rounded-md bg-background text-foreground px-4 py-2"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter your brand name"
              />
            </div>

            <div>
              <label className="block mb-1">Describe Your Vision</label>
              <textarea
                className="w-full border-input rounded-md bg-background text-foreground px-4 py-2 h-24"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your logo vision, style preferences, or any specific elements you want to include"
              />
            </div>

            <div>
              <label className="block mb-1">Upload Sketch (Optional)</label>
              <div 
                className="border-2 border-dashed border-input rounded-md p-4 text-center cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleSketchUpload}
                />
                {sketch ? (
                  <div className="relative">
                    <img src={sketch} alt="Uploaded sketch" className="max-h-40 mx-auto rounded" />
                    <button 
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSketch(null);
                      }}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="h-8 w-8 mb-2" />
                    <p>Click to upload your sketch</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG up to 5MB</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-1">Style</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full border-input rounded-md px-4 py-2"
              >
                <option>Modern</option>
                <option>Minimalist</option>
                <option>Luxury</option>
                <option>Playful</option>
                <option>Vintage</option>
                <option>Tech</option>
                <option>Organic</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Primary Color</label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-10 cursor-pointer border border-input rounded"
              />
            </div>

            <div>
              <label className="block mb-1">Layout</label>
              <select
                value={layout}
                onChange={(e) => setLayout(e.target.value)}
                className="w-full border-input rounded-md px-4 py-2"
              >
                <option>Icon + Text</option>
                <option>Text Only</option>
                <option>Icon Only</option>
                <option>Lettered</option>
                <option>Emblem</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Font Style</label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="w-full border-input rounded-md px-4 py-2"
              >
                <option>Sans-serif</option>
                <option>Serif</option>
                <option>Script</option>
                <option>Monospace</option>
                <option>Display</option>
                <option>Handwritten</option>
              </select>
            </div>

            <button
              onClick={generateLogos}
              disabled={isLoading || (!brandName && !description && !sketch)}
              className={`w-full bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2 ${
                isLoading || (!brandName && !description && !sketch)
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:opacity-90'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Generate Logos
                </>
              )}
            </button>
          </div>

          {/* Image Grid */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Generated Logos</h2>
            <div className="grid grid-cols-2 gap-4">
              {images.length > 0 ? (
                images.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img.url}
                      alt={`Logo ${i + 1}`}
                      className="rounded-lg border shadow-md w-full aspect-square object-contain bg-white"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                      <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-100">
                        Download
                      </button>
                      <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-100">
                        Edit
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg text-muted-foreground">
                  <Image className="h-12 w-12 mb-2" />
                  <p>Your generated logos will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}