var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let i = -1;
  let res = 0;
  let n = s.length;
  // 遍历
  for (let j = 0; j < n; j++) {
    /**
     * j = 0:  i = -1,res = 0 ---------> res=1, i = -1,map['h']=0
     * j = 1:  i = -1,res = 1 ---------> res=2, i = -1,map['e']=1
     * j = 2:  i = -1,res = 2 ---------> res=3, i = -1,map['l']=2
     * j = 3:  i = -1,res = 3 ---------> res=3, i = 2,map['l']=3
     * j = 4:  i = 2,res = 3 ---------> res=3, i = 2,map['o']=4
     * j = 5:  i = 2,res = 3 ---------> res=3, i = 2,map['y']=5
     * j = 6:  i = 2,res = 3 ---------> res=4, i = 2,map['k']=6
     * j = 7:  i = 2,res = 4 ---------> res=4, i = 3,map['l']=7
     */
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]));
    }
    res = Math.max(res, j - i);
    map.set(s[j], j);
  }
  return res;
};
console.log(lengthOfLongestSubstring("helloyfl"));
