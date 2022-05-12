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
      // Use the information.. We have the n-number of people in the town.. 
      // Create a hash-table where each is the key.
      const likes: any = {}
      const likedBy: any = {}
      
    for (let i = 1; i <= n; i++) {
        likes[i] = 0
        likedBy[i] = 0
    }
    for (let edgeArr of trust) {
        likes[edgeArr[0]]++
        likedBy[edgeArr[1]]++
    }
    let judge = '0';
    for (let key in likes) {
        if (likes[key] === 0) judge = key;
    }
    if (likedBy[judge] === n-1) return judge;
    else return -1;


  }

// console.log(judgeSearch(3, [[1,3],[2,3],[3,1]]));
console.log(`judgeSearch(3, [[1,3],[2,3],[3,1]])  :  ${judgeSearch(3, [[1,3],[2,3],[3,1]])}`)
console.log(`judgeSearch(3, [[1,3],[2,3]])  :  ${judgeSearch(3, [[1,3],[2,3]])}`)