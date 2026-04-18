import {createWarehouse, addDeliveryMethods} from "./api.js";

chrome.runtime.onMessage.addListener(async (message) => {
    const result = await chrome.storage.local.get([
        "companyId",
        "warehouseDraftId"
    ]);
    console.log("content 接收到的数据:",message)

    if (!result.companyId) {
        alert("请先配置 company ID")
        return
    }


    if (message.type === "CREATE_WAREHOUSE") {
        const warehouseDraftResult = await createWarehouse(result.companyId)
        if (warehouseDraftResult.error) {
            alert("创建仓库失败")
            return
        }
        alert("创建仓库成功,页面即将跳转")
    }

    if (message.type === "ADD_DELIVERY_METHODS") {

        if (!result.warehouseDraftId) {
            alert("请先配置 仓库 ID")
            return
        }

        if (!message.data) {
            alert("请先配置 仓库数据")
            return
        }

        await addDeliveryMethods(result.companyId, result.warehouseDraftId, message.data)
    }

})
