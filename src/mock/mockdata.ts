import mockjs from "mockjs"
const total = 23;
// name|min-max:string 重复string生成一个字符串 重复次数大于等于min 小于等于max
export function getList() {
    return {
        code: 0,
        data: {
            list: mockjs.mock({
                "array|10": [
                    {
                        'color': '@COLOR',
                        'jobSheetNo':/B\d{8}/,
                        'lotNo': /水木\d{6}/,
                        "colorNum":"@COLOR",
                        "createDate":"@date",
                        "currProcessName":"减量",
                        "doneProcessCount|1-8":8,
                        "processCount|7-10":8,
                    }
                ]
            }),
            total:total
        }
    }
}