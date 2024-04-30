function twoSum(nums: number[], target: number): number[] {

    function twoPointers(arr: {val: number, index: number}[],leftPointer: number, rightPointer: number) {
        if(leftPointer === rightPointer) {
            return []
        }

        if(arr[leftPointer].val + arr[rightPointer].val > target) {
            return twoPointers(arr, leftPointer, rightPointer - 1)
        }

        if(arr[leftPointer].val + arr[rightPointer].val < target) {
            return twoPointers(arr, leftPointer + 1, rightPointer)
        }

        return [arr[leftPointer].index, arr[rightPointer].index]
    }

    return twoPointers(
        nums
            .map((val, index) => ({val, index}))
            .sort((a,b) => a.val - b.val),
        0,
        nums.length - 1
    )
};