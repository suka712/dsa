const w: number = parseInt(readline());
const h: number = parseInt(readline());
const map: string[] = [];
for (let i = 0; i < h; i++) {
    const line: string = readline();
    map.push(line);
}
function isMine(x: number, y: number): boolean {
    return x>=0 && x<w && y>=0 && y<h && map[y][x]==="x";
}
function countMine(x: number, y: number, w: number, h: number, map: string[]): number {
    let count: number = 0
    for(let dy=-1; dy<=1; dy++) {
        for(let dx=-1; dx<=1; dx++) {
            const new_x = x + dx;
            const new_y = y + dy;
            count += isMine(new_x, new_y) ? 1 : 0;
        }
    }
    return count;
}
function solve(w: number, h: number, map: string[]): string[] {
    const result: string[] = [];
    for(let y=0; y<h; y++) {
        let row: string = "";
        for(let x=0; x<w; x++) {
            if(map[y][x] === "x") {
                row += ".";
            } else {
                const count = countMine(x,y,w,h,map);
                row += count > 0 ? count.toString() : ".";
            }
        }
        result.push(row);
    }

    return result;
}
const output = solve(w, h, map);
output.forEach(row => console.log(row));