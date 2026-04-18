import deliveryData from './delivery_data.json' with {type: 'json'};

chrome.runtime.onInstalled.addListener(() => {
    // 菜单 1：打开 Ozon 设置页
    chrome.contextMenus.create({
        id: "ozon_open_settings",
        title: "Ozon：打开账号设置页",
        contexts: ["all"],
        documentUrlPatterns: [
            "https://seller.ozon.ru/*",
            "https://ozon.ru/*",
            "https://www.ozon.ru/*",
        ]
    });

    // 菜单 2：执行自动化脚本
    chrome.contextMenus.create({
        id: "create_warehouse",
        title: "Ozon：创建仓库",
        contexts: ["all"],
        documentUrlPatterns: [
            "https://seller.ozon.ru/*",
            "https://ozon.ru/*",
            "https://www.ozon.ru/*",
        ]
    });


    // 菜单 3：创建配送
    chrome.contextMenus.create({
        id: "add_delivery_method",
        title: "Ozon：添加配送",
        contexts: ["all"],
        documentUrlPatterns: [
            "https://seller.ozon.ru/*",
            "https://ozon.ru/*",
            "https://www.ozon.ru/*",
        ]
    });

});

const openSettingPage = (info, tab) => {
    chrome.tabs.create({
        url: "https://seller.ozon.ru/app/settings/api-keys"
    });
}

const createWarehouse = (info, tab) => {
    chrome.tabs.sendMessage(tab.id, {
        type: "CREATE_WAREHOUSE"
    });
}

const addDeliveryMethod = (info, tab) => {
    chrome.tabs.sendMessage(tab.id, {
        type: "ADD_DELIVERY_METHODS",
        data: deliveryData
    });
}


chrome.contextMenus.onClicked.addListener((info, tab) => {

    if (!tab?.id) return;
    const cmds = {
        ozon_open_settings: openSettingPage,
        create_warehouse: createWarehouse,
        add_delivery_method: addDeliveryMethod,
    }

    const cmd = cmds[info.menuItemId]
    cmd(info, tab)
})
