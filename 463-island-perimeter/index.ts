function islandPerimeter(grid: number[][]): number {
    let perimeter = 0;

    for(let x=0; x < grid.length; x++) {
        for(let y=0; y < grid[0].length; y++) {
            if(grid[x][y]) {
                perimeter += 4
                if((x > 0 && grid[x-1][y])) {
                    perimeter -=2
                }
                if((y>0 && grid[x][y-1])) {
                    perimeter -=2
                }
            }
        }
    }

    return perimeter;
}