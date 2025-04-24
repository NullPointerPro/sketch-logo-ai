'use client'
import { useState } from 'react'
import { 
    Square, 
    Image, 
    Box, 
    Sun, 
    SlidersHorizontal, 
    ChevronLeft, 
    ChevronRight, 
    ZoomIn, 
    ZoomOut, 
    RefreshCw,
    MessageSquare,
    Settings,
    Palette,
    Droplet,
    Sparkles,
    Layers,
    Camera,
    Grid,
    MousePointer,
    Pencil,
    Ruler,
    Shapes,
    Smile,
    Upload,
    Eraser,
    Trash2
} from 'lucide-react'

function GeneratePage() {
    // AI Input Slider
    const [aiInput, setAiInput] = useState(50)
    
    // Color Selection (up to 4 colors)
    const [selectedColors, setSelectedColors] = useState(['#000000'])
    
    // Style Options
    const [dimension, setDimension] = useState('2d')
    const [style2D, setStyle2D] = useState('pictorial')
    const [style3D, setStyle3D] = useState('regular')
    const [styleEra, setStyleEra] = useState('modern')
    const [styleDetail, setStyleDetail] = useState('detailed')

    // New state variables for sketch tools
    const [showGrid, setShowGrid] = useState(false)
    const [activeTool, setActiveTool] = useState('pencil')
    const [canvasHistory, setCanvasHistory] = useState([])
    const [currentCanvas, setCurrentCanvas] = useState(null)

    // Add new state variables for logo generation
    const [generationStage, setGenerationStage] = useState(1)
    const [generatedLogos, setGeneratedLogos] = useState([])
    const [selectedLogo, setSelectedLogo] = useState(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [prompt, setPrompt] = useState('')
    const [error, setError] = useState(null)

    // Style options data
    const styles2D = [
        { value: 'pictorial', label: 'Pictorial' },
        { value: 'mascot', label: 'Mascot' },
        { value: 'badge', label: 'Badge/Crest' },
        { value: 'cartoon', label: 'Cartoon' },
        { value: 'icon', label: 'Icon/Emoji' },
        { value: 'abstract', label: 'Abstract' },
        { value: 'lineart', label: 'Line Art' },
        { value: 'pixel', label: 'Pixel Art' },
        { value: 'comic', label: 'Comic Art' },
        { value: 'flat', label: 'Flat Graphic' },
        { value: 'manga', label: 'Manga' },
        { value: 'kawaii', label: 'Kawaii' },
        { value: 'watercolor', label: 'WaterColor' },
        { value: 'popart', label: 'Pop Art' },
        { value: 'illustration', label: 'Illustration' }
    ]

    const styles3D = [
        { value: 'regular', label: 'Regular 3D' },
        { value: 'embroidered', label: 'Embroidered' },
        { value: 'inflated', label: 'Inflated' },
        { value: 'isometric', label: 'Isometric' },
        { value: 'clay', label: 'Craft Clay' },
        { value: 'origami', label: 'Origami' },
        { value: 'cinematic', label: 'Cinematic' },
        { value: 'digitalart', label: 'Digital Art' },
        { value: 'fantasy', label: 'Fantasy Art' },
        { value: 'neopunk', label: 'NeoPunk' },
        { value: 'lowpoly', label: 'Low Poly' },
        { value: 'papercraft', label: 'PaperCraft' },
        { value: 'darkarts', label: 'Dark Arts' },
        { value: 'futuristic', label: 'Futuristic' }
    ]

    // Tool definitions
    const tools = [
        { id: 'pointer', label: 'Select', icon: MousePointer },
        { id: 'pencil', label: 'Pencil', icon: Pencil },
        { id: 'line', label: 'Line', icon: Ruler },
        { id: 'shape', label: 'Shape', icon: Shapes },
        { id: 'icon', label: 'Icon', icon: Smile },
        { id: 'upload', label: 'Upload', icon: Upload },
        { id: 'eraser', label: 'Eraser', icon: Eraser }
    ]

    const handleGenerate = async () => {
        try {
            setIsGenerating(true)
            setError(null)

            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    style: dimension === '2d' ? style2D : style3D,
                    colors: selectedColors,
                    dimension
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to generate image')
            }

            const data = await response.json()
            setGeneratedLogos([{ id: 1, url: data.imageUrl }])
        } catch (err) {
            setError(err.message)
            console.error('Generation error:', err)
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#F0F0F0] [&_nav]:hidden">
            <div className="flex h-screen">
                {/* Left Sidebar */}
                <div className="w-64 bg-[#F8F8F8] p-6 text-[#373F47] border-r border-gray-200">
                    <h2 className="text-xl font-bold mb-6">Image Settings</h2>
                    
                    <div className="space-y-6">
                        {/* AI Input Slider */}
                        <div>
                            <label className="block text-sm font-medium mb-2">AI Input: {aiInput}%</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                value={aiInput}
                                onChange={(e) => setAiInput(e.target.value)}
                                className="w-full accent-[#EA526F]"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Sketch-based</span>
                                <span>AI Magic</span>
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Colors</label>
                            <div className="flex flex-wrap gap-2">
                                {selectedColors.map((color, index) => (
                                    <div key={index} className="relative">
                                        <input
                                            type="color"
                                            value={color}
                                            onChange={(e) => {
                                                const newColors = [...selectedColors];
                                                newColors[index] = e.target.value;
                                                setSelectedColors(newColors);
                                            }}
                                            className="w-8 h-8 p-1 rounded-full cursor-pointer"
                                        />
                                        {index > 0 && (
                                            <button
                                                onClick={() => {
                                                    const newColors = selectedColors.filter((_, i) => i !== index);
                                                    setSelectedColors(newColors);
                                                }}
                                                className="absolute -top-1 -right-1 bg-[#EA526F] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                            >
                                                ×
                                            </button>
                                        )}
                                    </div>
                                ))}
                                {selectedColors.length < 4 && (
                                    <button
                                        onClick={() => setSelectedColors([...selectedColors, '#000000'])}
                                        className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#EA526F] hover:text-[#EA526F] transition-colors"
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Dimension Selection */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Dimension</label>
                            <select 
                                value={dimension}
                                onChange={(e) => setDimension(e.target.value)}
                                className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2"
                            >
                                <option value="2d">2D</option>
                                <option value="3d">3D</option>
                            </select>
                        </div>

                        {/* Style Selection - conditional based on dimension */}
                        {dimension === '2d' ? (
                            <>
                                <div>
                                    <label className="block text-sm font-medium mb-2">2D Style</label>
                                    <select 
                                        value={style2D}
                                        onChange={(e) => setStyle2D(e.target.value)}
                                        className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2"
                                    >
                                        {styles2D.map((style) => (
                                            <option key={style.value} value={style.value}>
                                                {style.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Era</label>
                                    <select 
                                        value={styleEra}
                                        onChange={(e) => setStyleEra(e.target.value)}
                                        className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2"
                                    >
                                        <option value="modern">Modern</option>
                                        <option value="vintage">Vintage</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Detail Level</label>
                                    <select 
                                        value={styleDetail}
                                        onChange={(e) => setStyleDetail(e.target.value)}
                                        className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2"
                                    >
                                        <option value="detailed">Detailed</option>
                                        <option value="minimalist">Minimalist</option>
                                    </select>
                                </div>
                            </>
                        ) : (
                            <div>
                                <label className="block text-sm font-medium mb-2">3D Style</label>
                                <select 
                                    value={style3D}
                                    onChange={(e) => setStyle3D(e.target.value)}
                                    className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2"
                                >
                                    {styles3D.map((style) => (
                                        <option key={style.value} value={style.value}>
                                            {style.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Canvas Area */}
                <div className="flex-1 p-6">
                    {/* Top Toolbar */}
                    <div className="flex items-center justify-between mb-6">
                        {/* Left Tools */}
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => setShowGrid(!showGrid)}
                                className={`p-2 rounded-md transition-colors ${showGrid ? 'bg-[#EA526F] text-white' : 'bg-[#373F47] text-white hover:bg-[#EA526F]'}`}
                                title="Toggle Grid"
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button 
                                className="p-2 bg-[#373F47] text-white rounded-md hover:bg-[#EA526F] transition-colors"
                                onClick={() => {
                                    setCanvasHistory([])
                                    setCurrentCanvas(null)
                                }}
                                title="Clear Canvas"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Main Tools */}
                        <div className="flex gap-2 bg-[#373F47] p-1 rounded-lg">
                            {tools.map((tool) => (
                                <button
                                    key={tool.id}
                                    onClick={() => setActiveTool(tool.id)}
                                    className={`p-2 rounded-md transition-colors ${
                                        activeTool === tool.id 
                                            ? 'bg-[#EA526F] text-white' 
                                            : 'text-white hover:bg-[#EA526F]/50'
                                    }`}
                                    title={tool.label}
                                >
                                    <tool.icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Canvas */}
                    <div className="relative bg-white rounded-lg shadow-lg aspect-square max-w-2xl mx-auto overflow-hidden">
                        {/* Grid Overlay */}
                        {showGrid && (
                            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none">
                                {[...Array(64)].map((_, i) => (
                                    <div key={i} className="border border-gray-100" />
                                ))}
                            </div>
                        )}

                        {/* Canvas Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            {activeTool === 'pointer' && 'Click and drag to select elements'}
                            {activeTool === 'pencil' && 'Click and drag to draw'}
                            {activeTool === 'line' && 'Click and drag to draw a line'}
                            {activeTool === 'shape' && 'Click and drag to draw a shape'}
                            {activeTool === 'icon' && 'Click to place an icon'}
                            {activeTool === 'upload' && 'Click to upload an image'}
                            {activeTool === 'eraser' && 'Click and drag to erase'}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                            <button className="p-2 bg-[#373F47] text-white rounded-full hover:bg-[#EA526F] transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="p-2 bg-[#373F47] text-white rounded-full hover:bg-[#EA526F] transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Zoom and Refresh */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <button className="p-2 bg-[#373F47] text-white rounded-full hover:bg-[#EA526F] transition-colors">
                                <ZoomIn className="w-5 h-5" />
                            </button>
                            <button className="p-2 bg-[#373F47] text-white rounded-full hover:bg-[#EA526F] transition-colors">
                                <ZoomOut className="w-5 h-5" />
                            </button>
                            <button className="p-2 bg-[#373F47] text-white rounded-full hover:bg-[#EA526F] transition-colors">
                                <RefreshCw className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Bottom Prompt Input */}
                    <div className="max-w-2xl mx-auto mt-6">
                        <div className="relative flex gap-2">
                            <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input 
                                type="text" 
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Describe what you want to generate..."
                                className="flex-1 pl-10 pr-4 py-3 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EA526F]"
                            />
                            <button
                                onClick={handleGenerate}
                                disabled={isGenerating || !prompt.trim()}
                                className="bg-[#EA526F] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#d44a63] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isGenerating ? 'Generating...' : 'Generate'}
                            </button>
                        </div>
                        {error && (
                            <p className="mt-2 text-sm text-red-500">{error}</p>
                        )}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-64 bg-[#F8F8F8] p-6 text-[#373F47] border-l border-gray-200">
                    <h2 className="text-xl font-bold mb-6">Logo Generation</h2>
                    
                    <div className="space-y-6">
                        {/* Stage Indicator */}
                        <div className="flex items-center justify-between mb-6">
                            {[1, 2, 3].map((stage) => (
                                <div key={stage} className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        generationStage === stage 
                                            ? 'bg-[#EA526F] text-white' 
                                            : 'bg-gray-200 text-gray-500'
                                    }`}>
                                        {stage}
                                    </div>
                                    <span className="text-xs mt-1">
                                        {stage === 1 ? 'Generate' : stage === 2 ? 'Adjustments' : 'Download'}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stage Content */}
                        {generationStage === 1 && (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600">
                                    Generate your logo using the prompt input and settings.
                                </p>
                                <button
                                    onClick={() => setGenerationStage(2)}
                                    disabled={generatedLogos.length === 0}
                                    className="w-full bg-[#EA526F] text-white py-2 px-4 rounded-md hover:bg-[#d44a63] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Continue to Adjustments
                                </button>
                            </div>
                        )}

                        {generationStage === 2 && (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600">
                                    Make adjustments to your generated logo.
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Color Adjustment</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="50"
                                            className="w-full accent-[#EA526F]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Size</label>
                                        <select className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2">
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Style</label>
                                        <select className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2">
                                            <option>Minimal</option>
                                            <option>Detailed</option>
                                            <option>Abstract</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setGenerationStage(3)}
                                    className="w-full bg-[#EA526F] text-white py-2 px-4 rounded-md hover:bg-[#d44a63] transition-colors"
                                >
                                    Continue to Download
                                </button>
                            </div>
                        )}

                        {generationStage === 3 && (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600">
                                    Choose your preferred format and download your logo.
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Format</label>
                                        <select className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2">
                                            <option>PNG</option>
                                            <option>SVG</option>
                                            <option>JPG</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Resolution</label>
                                        <select className="w-full bg-white border border-gray-200 text-[#373F47] rounded-md p-2">
                                            <option>Standard (72 DPI)</option>
                                            <option>High (300 DPI)</option>
                                            <option>Ultra (600 DPI)</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        // Handle final download
                                        console.log('Downloading logo')
                                    }}
                                    className="w-full bg-[#EA526F] text-white py-2 px-4 rounded-md hover:bg-[#d44a63] transition-colors"
                                >
                                    Download Logo
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneratePage 