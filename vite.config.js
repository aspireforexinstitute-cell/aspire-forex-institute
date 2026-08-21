import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function forexCalendarPlugin() {
  let cachedData = null;
  let lastFetchTime = 0;
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  return {
    name: 'forex-calendar-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/ff-calendar')) {
          return next();
        }

        const now = Date.now();
        if (cachedData && now - lastFetchTime < CACHE_DURATION) {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.end(cachedData);
          return;
        }

        try {
          const response = await fetch('https://nfs.faireconomy.media/ff_calendar_thisweek.json', {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
              'Accept': 'application/json, text/plain, */*',
            }
          });
          if (response.ok) {
            const text = await response.text();
            JSON.parse(text); // validate
            cachedData = text;
            lastFetchTime = now;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(cachedData);
            return;
          }
        } catch (e) {
          console.error('Forex calendar middleware error:', e.message);
        }

        if (cachedData) {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.end(cachedData);
        } else {
          next();
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), forexCalendarPlugin()],
})


