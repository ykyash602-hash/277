# Vercel OpenRouter Chat AI

A modern chat application built with Next.js 14 and deployed on Vercel, powered by OpenRouter for access to multiple AI models.

## 🚀 Features

- **Multiple AI Models**: GPT-4, Claude 3.5, Gemini Pro, Llama 3.1, and more
- **Real-time Streaming**: Live responses as they're generated
- **Vercel Optimized**: Built specifically for Vercel deployment
- **Responsive Design**: Works perfectly on desktop and mobile
- **Cost Indicator**: Shows relative costs for different models
- **Edge Runtime**: Fast global performance

## 🛠️ Quick Setup

1. **Clone/Download** this project
2. **Install dependencies**: `npm install`
3. **Get OpenRouter API Key** from [https://openrouter.ai/keys](https://openrouter.ai/keys)
4. **Create `.env.local`**:
   ```bash
   OPENROUTER_API_KEY=sk-or-v1-your-api-key-here
   NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
   NEXT_PUBLIC_SITE_NAME=Your Chat AI
   ```
5. **Run locally**: `npm run dev`
6. **Visit**: [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to Vercel

1. **Push to GitHub**
2. **Import project** in Vercel dashboard
3. **Add environment variables** in Vercel:
   - `OPENROUTER_API_KEY`: Your OpenRouter API key
   - `NEXT_PUBLIC_SITE_URL`: Your Vercel app URL
   - `NEXT_PUBLIC_SITE_NAME`: Your app name
4. **Deploy**!

## 🤖 Available Models

- **OpenAI**: GPT-4o, GPT-4o Mini
- **Anthropic**: Claude 3.5 Sonnet, Claude 3 Haiku
- **Google**: Gemini Pro
- **Meta**: Llama 3.1 8B (Free tier available)
- **Microsoft**: WizardLM 2
- **Mistral**: Mixtral 8x7B

## 💰 Cost Management

Models are labeled with cost indicators:
- **Free**: No cost (limited usage)
- **Low**: Very affordable
- **Medium**: Moderate pricing
- **High**: Premium models

## 📱 Mobile Support

Fully responsive design optimized for:
- iPhone/Android phones
- Tablets
- Desktop browsers

## 🔧 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENROUTER_API_KEY` | ✅ Yes | Your OpenRouter API key |
| `NEXT_PUBLIC_SITE_URL` | ❌ No | Your site URL for OpenRouter |
| `NEXT_PUBLIC_SITE_NAME` | ❌ No | Your site name |

## 🚨 Troubleshooting

**"API key not configured" error**: Make sure `OPENROUTER_API_KEY` is set in your Vercel environment variables.

**Deployment fails**: Ensure all dependencies are in `package.json` and your API key is properly configured.

**Slow responses**: Try switching to a faster model like GPT-4o Mini or Claude 3 Haiku.

## 📄 License

MIT License - Feel free to use and modify!
