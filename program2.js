const decodeTheRing = function (s, p) {
    const n = s.length;
    const m = p.length;
    const dp = Array(n + 1).fill(false).map(() => Array(m + 1).fill(false));
    dp[0][0] = true;
    
    for (let j = 1; j <= m; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }
    
    return dp[n][m];
};

module.exports = decodeTheRing;
