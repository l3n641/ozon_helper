const companyInput = document.getElementById("companyId");
const warehouseInput = document.getElementById("warehouseDraftId");
const saveBtn = document.getElementById("saveBtn");

/**
 * ✅ 打开 popup 自动读取
 */
document.addEventListener("DOMContentLoaded", async () => {
    const result = await chrome.storage.local.get([
        "companyId",
        "warehouseDraftId"
    ]);

    if (result.companyId) {
        companyInput.value = result.companyId;
    }

    if (result.warehouseDraftId) {
        warehouseInput.value = result.warehouseDraftId;
    }
});

/**
 * ✅ 点击保存
 */
saveBtn.addEventListener("click", async () => {
    await chrome.storage.local.set({
        companyId: companyInput.value,
        warehouseDraftId: warehouseInput.value
    });

    alert("保存成功!");
});
