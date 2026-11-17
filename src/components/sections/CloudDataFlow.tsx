import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowDown, Database, Pause, Play } from 'lucide-react';

export function CloudDataFlow() {
  const [paused, setPaused] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const [connections, setConnections] = useState<{ d: string; color: string; start: [number, number]; end: [number, number] }[]>([]);

  const [canvas, setCanvas] = useState({ width: 1, height: 1 });

  useLayoutEffect(() => {
    const pipeline = pipelineRef.current;
    if (!pipeline) return;
    const update = () => {
      const origin = pipeline.getBoundingClientRect();
      setCanvas({ width: origin.width, height: origin.height });
      const box = (element: Element) => {
        const rect = element.getBoundingClientRect();
        return { left: rect.left - origin.left, right: rect.right - origin.left, y: rect.top - origin.top + rect.height / 2 };
      };
      const database = pipeline.querySelector('.database-icon');
      const system = pipeline.querySelector('.system-card');
      if (!database || !system) return;
      const db = box(database);
      const destination = box(system);
      const colors = ['#ffb455', '#64bdff', '#a99aff'];
      const paths = Array.from(pipeline.querySelectorAll('.source-node')).map((element, index) => {
        const source = box(element);
        const middle = source.right + (db.left - source.right) * .52;
        return { d: `M ${source.right} ${source.y} C ${middle} ${source.y}, ${middle} ${db.y}, ${db.left} ${db.y}`, color: colors[index], start: [source.right, source.y] as [number, number], end: [db.left, db.y] as [number, number] };
      });
      paths.push({ d: `M ${db.right} ${db.y} C ${db.right + 45} ${db.y}, ${destination.left - 45} ${destination.y}, ${destination.left} ${destination.y}`, color: '#9cb3ff', start: [db.right, db.y], end: [destination.left, destination.y] });
      setConnections(paths);
    };
    const observer = new ResizeObserver(update);
    observer.observe(pipeline);
    pipeline.querySelectorAll('.pipeline-stage, .stage-label, .source-node, .database-icon, .system-card').forEach(element => observer.observe(element));
    let active = true;
    const refresh = () => { if (active) update(); };
    window.addEventListener('resize', refresh);
    void document.fonts.ready.then(refresh);
    update();
    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener('resize', refresh);
    };
  }, []);
  return (
    <div className={`cloud-flow ${paused ? 'flow-paused' : ''}`}>
      <div className="flow-heading">
        <span>How your cloud data connects</span>
        <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play data flow animation' : 'Pause data flow animation'}>
          {paused ? <Play size={14} /> : <Pause size={14} />}{paused ? 'Play' : 'Pause'}
        </button>
      </div>
      <div ref={pipelineRef} className="pipeline" aria-label="AWS, Azure, and Google Cloud billing exports enter a unified database. Eorix fetches that data for cost insights.">
        <svg className="pipeline-connections" viewBox={`0 0 ${canvas.width} ${canvas.height}`} preserveAspectRatio="none" aria-hidden="true">
          {connections.map((connection, index) => <g key={index}>
            <path className="route-base" d={connection.d}/>
            <path className="route-packet" d={connection.d} pathLength="1" style={{ stroke: connection.color, animationDelay: `${index * .5}s` }}/>
            <circle cx={connection.start[0]} cy={connection.start[1]} r="3" fill={connection.color}/>
            <circle cx={connection.end[0]} cy={connection.end[1]} r="3" fill={connection.color}/>
          </g>)}
        </svg>
        <div className="pipeline-stage sources">
          <span className="stage-label">01 · Collect</span>
          <div className="source-node"><span className="provider-symbol"><img src="/providers/aws.svg" width="36" height="36" alt=""/></span><div><strong>Amazon Web Services</strong><span>Cost &amp; usage exports</span></div></div>
          <div className="source-node"><span className="provider-symbol"><img src="/providers/azure.svg" width="30" height="30" alt=""/></span><div><strong>Microsoft Azure</strong><span>Cost Management exports</span></div></div>
          <div className="source-node"><span className="provider-symbol"><img src="/providers/gcp.svg" width="34" height="34" alt=""/></span><div><strong>Google Cloud</strong><span>Cloud Billing exports</span></div></div>
        </div>
        <div className="pipeline-connector" aria-hidden="true">
          <ArrowDown className="pipeline-mobile-arrow" size={22}/>
        </div>
        <div className="pipeline-stage database-stage">
          <span className="stage-label">02 · Store</span>
          <div className="database-icon"><span className="database-port input-port" aria-hidden="true"/><Database size={38} strokeWidth={1.3}/><span className="database-port output-port" aria-hidden="true"/></div>
          <strong>Unified database</strong>
          <p>Normalize, allocate,<br/>and store billing data.</p>
        </div>
        <div className="pipeline-connector fetch-connector" aria-hidden="true">
          <ArrowDown className="pipeline-mobile-arrow" size={22}/>
        </div>
        <div className="pipeline-stage system-stage">
          <span className="stage-label">03 · Fetch</span>
          <div className="system-card"><img className="pipeline-logo" src="/brand-mark.png" alt=""/><img className="pipeline-wordmark" src="/brand-word.png" alt="Eorix"/><span>Cloud cost intelligence</span><div className="system-capabilities"><span>Visibility</span><span>Optimization</span></div></div>
          <p>One workspace.<br/>A complete financial picture.</p>
        </div>
      </div>
      <div className="flow-footer"><span><i/>Planned architecture</span><span>Illustration · no live cloud connection</span></div>
    </div>
  );
}
