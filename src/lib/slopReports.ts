import fs from 'node:fs';
import path from 'node:path';

export interface SlopReportEntry {
    slug: string;
    url: string;
    title: string;
    modified: Date;
}

export function getSlopReports(): SlopReportEntry[] {
    const slopDir = path.join(process.cwd(), 'public/slop');
    if (!fs.existsSync(slopDir)) {
        return [];
    }

    return fs
        .readdirSync(slopDir)
        .filter((name: string) => name.endsWith('.html'))
        .map((name: string) => {
            const filePath = path.join(slopDir, name);
            const content = fs.readFileSync(filePath, 'utf-8');
            const slug = name.replace(/\.html$/, '');
            const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
            const title = titleMatch?.[1]?.trim() || slug.replace(/-/g, ' ');

            return {
                slug,
                url: `/slop/${name}`,
                title,
                modified: fs.statSync(filePath).mtime,
            };
        })
        .sort((a: SlopReportEntry, b: SlopReportEntry) => b.modified.getTime() - a.modified.getTime());
}
