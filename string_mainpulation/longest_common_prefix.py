

class Solution:
    def longestCommonPrefix(self, strs: str) -> str:
        res = ""
        for i in range(len(strs[0])):
            for s in strs:
               # print("this is s[i] ",s[i])
               # print("this is strs[0][i] ",strs[0][i])
                if i == len(s) or s[i] != strs[0][i]:
                    return res
           # print("here we add it to res")
            res += strs[0][i]
        return res


test1 = Solution()
print('test:  ', test1.longestCommonPrefix(['nerp', 'derdle', 'ble']))
print('test:  ', test1.longestCommonPrefix(['adam', 'ada', 'adal']))
print('test:  ', test1.longestCommonPrefix(['ad', 'a']))
