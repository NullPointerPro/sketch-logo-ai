import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    try {
        const { prompt, style, colors, dimension } = await request.json();

        // Construct a detailed prompt based on user inputs
        const detailedPrompt = `Create a professional logo with the following specifications:
            - Style: ${style}
            - Colors: ${colors.join(', ')}
            - Dimension: ${dimension}
            - Main concept: ${prompt}
            Make it clean, modern, and suitable for business use.`;

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: detailedPrompt,
            n: 1,
            size: "1024x1024",
            quality: "standard",
            style: "natural"
        });

        return NextResponse.json({ imageUrl: response.data[0].url });
    } catch (error) {
        console.error('Error generating image:', error);
        return NextResponse.json(
            { error: 'Failed to generate image' },
            { status: 500 }
        );
    }
} 