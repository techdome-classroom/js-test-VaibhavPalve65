const getTotalIsles = function (grid) {
    const dfs = (grid, r, c) => {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        grid[r][c] = 'W';
        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;
            if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 'L') {
                dfs(grid, nr, nc);
            }
        }
    };
    
    if (!grid || grid.length === 0) return 0;
    
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'L') {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    
    return count;
};

module.exports = getTotalIsles;
