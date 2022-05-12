/**
 * @description In a town, there are @param n people labeled from 1 to n. 
 * There is a rumor that one of these people is secretly the town judge.
 * If the town judge exists, then The town judge trusts nobody.
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties 1 and 2.
 * @NOTE All the pairs of trust are **unique**
 * @param trust You are given an array trust where trust[i] = [ai, bi] 
 * representing that the person labeled ai trusts the person labeled bi.
 * @return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
 */

  function judgeSearch (n: number, trust: number[][]) {
      // Lets try to map the edge list to an node-adjacency dictionary
      const returnDict: any = {};
      const visitedSet: Set<number> = new Set();
      for (let edgeArr of trust) {
        const [a, b] = edgeArr;
        // returnDict[a] = [b]
        visitedSet.add(b)
        if ( visitedSet.has(b) && visitedSet.has(a) ) return edgeArr[a];
      }
      return -1;
  }

// console.log(judgeSearch(3, [[1,3],[2,3],[3,1]]));
console.log(`judgeSearch(3, [[1,3],[2,3],[3,1]])  :  ${judgeSearch(3, [[1,3],[2,3],[3,1]])}`)
console.log(`judgeSearch(3, [[1,3],[2,3]])  :  ${judgeSearch(3, [[1,3],[2,3]])}`)