export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Keep Print Perfect — Server error</title>
    <style>
      :root{--bg:#f7fafc;--fg:#0f172a;--muted:#6b7280;--card:#ffffff;--accent:#0f172a;--radius:12px}
      html,body{height:100%}
      body{margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;line-height:1.4;background:var(--bg);color:var(--fg);display:grid;place-items:center;padding:24px}
      .card{background:var(--card);padding:28px;border-radius:var(--radius);box-shadow:0 6px 20px rgba(2,6,23,0.06);max-width:720px;width:100%}
      h1{font-size:20px;margin:0 0 8px}
      p{margin:0 0 18px;color:var(--muted)}
      .meta{font-size:13px;color:var(--muted);margin-bottom:18px}
      .actions{display:flex;gap:10px;flex-wrap:wrap}
      .btn{display:inline-block;padding:10px 14px;border-radius:8px;text-decoration:none;font-weight:600;border:1px solid transparent;cursor:pointer}
      .btn-primary{background:var(--accent);color:#fff}
      .btn-ghost{background:transparent;border-color:#e6edf3;color:var(--fg)}
      .report{font-size:13px;color:var(--muted);margin-top:14px}
      a.inline{color:inherit;text-decoration:underline}
      @media (max-width:520px){.card{padding:20px}}
    </style>
  </head>
  <body>
    <main class="card" role="main" aria-labelledby="error-title">
      <h1 id="error-title">Keep Print Perfect — Something went wrong</h1>
      <p>We're sorry — Keep Print Perfect encountered an unexpected error. You can try again or return to the homepage.</p>
      <div class="meta" aria-live="polite" id="error-meta">Generating error details…</div>
      <div class="actions" role="group" aria-label="Error actions">
        <button class="btn btn-primary" id="retry">Try again</button>
        <a class="btn btn-ghost" href="/">Go home</a>
      </div>
      <div class="report">
        If this keeps happening, <a class="inline" id="report-link" href="#">report the issue</a> and include the error ID.
      </div>
    </main>

    <script>
      (function(){
        function generateId(){
          try{
            const arr = new Uint8Array(8);
            if (typeof crypto !== 'undefined' && crypto.getRandomValues) crypto.getRandomValues(arr);
            else for(let i=0;i<arr.length;i++) arr[i]=Math.floor(Math.random()*256);
            return Array.from(arr).map(b=>b.toString(16).padStart(2,'0')).join('');
          }catch(e){return Date.now().toString(36)}
        }

        const id = generateId();
        const ts = new Date().toISOString();
        var meta = document.getElementById('error-meta');
        if(meta) meta.textContent = 'Error ID: ' + id + ' • ' + ts;

        document.getElementById('retry')?.addEventListener('click', function(){ location.reload(); });

        var reportLink = document.getElementById('report-link');
        if(reportLink){
          var subject = encodeURIComponent('Keep Print Perfect error report: ' + id);
          var body = encodeURIComponent('Error ID: ' + id + '\nTime: ' + ts + '\nURL: ' + location.href + '\nUA: ' + navigator.userAgent + '\n\nPlease add any notes here.');
          reportLink.setAttribute('href','mailto:support@keepprintperfect.com?subject='+subject+'&body='+body);
        }

        // Best-effort client-side beacon to help correlate errors with server logs.
        try{
          navigator.sendBeacon && navigator.sendBeacon('/__client-error-beacon', JSON.stringify({id:id,t:ts,url:location.href,ua:navigator.userAgent}));
        }catch(e){}
      })();
    </script>
  </body>
</html>`;
}
