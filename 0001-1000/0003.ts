const lengthOfLongestSubstring = (s: string): number => {
    let max = 0;
    const chars = new Set<string>();
    for (let l = 0, r = 0; r < s.length; r++) {
        while (chars.has(s[r])) {
            chars.delete(s[l]);
            l++;
        }
        chars.add(s[r]);
        max = Math.max(max, r - l + 1);
    }
    return max;
}