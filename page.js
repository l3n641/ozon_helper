async function createWarehouse(companyId) {
    const reqData = {
        "company_id": companyId,
        "name": "莆田利发",
        "address": {
            "country": "China",
            "city": "Putian",
            "street": "hantin hua yuan a",
            "zipcode": "351199",
            "house": "8",
            "building": "",
            "apartment": "",
            "latitude": 25.4557366,
            "longitude": 119.0029034
        },
        "is_auto_assembly": false,
        "is_rfbs": true,
        "phone": "+86 151 6027 7940",
        "sla_cut_in": 2880,
        "first_mile_type": "",
        "timetable_template": {
            "holidays_override": [
                {
                    "day": "2026-02-11",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-02-12",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-02-22",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-02-23",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-04-02",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-04-03",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-04-05",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-04-06",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-04-29",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-04-30",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-05-03",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-05-04",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-05-05",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-06-19",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-06-20",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-06-21",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-09-22",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-09-25",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-09-26",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-09-27",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-10-05",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-10-06",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-10-07",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-02-13",
                    "from": "00:00",
                    "to": "23:59"
                },
                {
                    "day": "2026-02-14",
                    "from": "00:00",
                    "to": "23:59"
                }
            ],

            "working_hours": {
                "1": {"from": "00:00", "to": "23:59"},
                "2": {"from": "00:00", "to": "23:59"},
                "3": {"from": "00:00", "to": "23:59"},
                "4": {"from": "00:00", "to": "23:59"},
                "5": {"from": "00:00", "to": "23:59"},
                "6": {"from": "00:00", "to": "23:59"},
                "7": {"from": "00:00", "to": "23:59"}
            }
        },
        "postings_limit": -1,
        "return_address": {
            "country": "China",
            "city": "Putian",
            "street": "hantin hua yuan a",
            "zipcode": "351199",
            "house": "8",
            "building": "",
            "latitude": 25.4557366,
            "longitude": 119.0029034,
            "phone": "+86 151 6027 7940",
            "recipient": "Henanyanshenwenhualuyouyouxiangongsi",
            "comment": "Адрес склада возвратов\n351199, China, Putian, hantin hua yuan a, 8\n\nТелефон склада возвратов\n+86 151 6027 7940\n\nПолучатель\nHenanyanshenwenhualuyouyouxiangongsi"
        },
        "return_post_index": "",
        "return_provider_id": 1336
    }

    const response = await fetch(
        "https://seller.ozon.ru/api/site/logistic-service/v2/warehouse/draft/create",
        {
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-Hans",
                "content-type": "application/json",
                "x-o3-app-name": "seller-ui",
                "x-o3-company-id": companyId,
                "x-o3-language": "zh-Hans",
                "x-o3-page-type": "cb-warehouse-other"
            },
            referrer: "https://seller.ozon.ru/app/crossborder/warehouse/create",
            body: JSON.stringify(reqData)
        }
    );

    const warehouseDraft = await response.json();
    console.log("创建结果:", warehouseDraft);
    return warehouseDraft
}


async function addDeliveryMethod(companyId, postData) {


    const res = await fetch(
        "https://seller.ozon.ru/api/delivery-method-service/delivery-method/create",
        {
            method: "POST",
            credentials: "include",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "x-o3-app-name": "seller-ui",
                "x-o3-company-id": String(companyId),
                "x-o3-language": "zh-Hans",
                "x-o3-page-type": "cb-warehouse-other",
            },
            body: JSON.stringify(postData),
        }
    );

    const text = await res.text();
    let data;

    try {
        data = text ? JSON.parse(text) : null;
    } catch {
        data = text;
    }

    if (!res.ok) {
        const error = new Error("创建配送方式失败");
        error.status = res.status;
        error.response = data;
        throw error;
    }

    return data;
}

async function addDeliveryMethods(companyId, warehouseDraftId) {
    const methods = [
        {   //UNI Standard Extra Small UNI Putian
            company_id: companyId,
            warehouse_draft_id: warehouseDraftId,
            name: "UNI Standard Extra Small UNI Putian",
            cutoff: "17:00",
            tpl_integration_type: "aggregator",
            provider_id: 1266,
            template_id: 1109,
            tpl_dropoff_point_id: 25013908,
            delivery_type_id: 2,
            tariff_type: "STANDARD_OZON",
        },
        {   //UNI Express Extra Small UNE Putian
            company_id: companyId,
            warehouse_draft_id: warehouseDraftId,
            name: "UNI Express Extra Small UNE Putian",
            cutoff: "17:00",
            tpl_integration_type: "aggregator",
            provider_id: 1264,
            template_id: 1108,
            tpl_dropoff_point_id: 25013894,
            delivery_type_id: 2,
            tariff_type: "STANDARD_OZON",
        },
        {  //cel
            "company_id": companyId,
            "warehouse_id": warehouseDraftId,
            "name": "CEL Standard Extra Small Putian",
            "cutoff": "17:00",
            "tpl_integration_type": "aggregator",
            "provider_id": 995,
            "template_id": 768,
            "tpl_dropoff_point_id": 64282,
            "delivery_type_id": 2,
            "tariff_type": "STANDARD_OZON"
        },
        {   //china post
            "company_id": companyId,
            "warehouse_id": warehouseDraftId,
            "name": "China Post to PUDO Standard China Post to PUDO Standard  Putian2",
            "cutoff": "17:00",
            "tpl_integration_type": "hybrid",
            "provider_id": 1596,
            "template_id": 2197,
            "tpl_dropoff_point_id": 123401041,
            "delivery_type_id": 2,
            "tariff_type": "STANDARD_OZON"
        },
        {   //中亚e邮宝
            "company_id": companyId,
            "warehouse_id": warehouseDraftId,
            "name": "China Post ePacket CIS (中亚e邮宝) China Post ePacket Kazakhstan Putian",
            "cutoff": "17:00",
            "tpl_integration_type": "aggregator",
            "provider_id": 1082,
            "template_id": 943,
            "tpl_dropoff_point_id": 6001022,
            "delivery_type_id": 2,
            "tariff_type": "STANDARD_OZON"
        },
        {   //UNI Kazakhstan Standard
            "company_id": companyId,
            "warehouse_id": warehouseDraftId,
            "name": "UNI Kazakhstan Standard UNC UNI Kazakhstan Standard Extra Small UNC Putian",
            "cutoff": "17:00",
            "tpl_integration_type": "aggregator",
            "provider_id": 1702,
            "template_id": 2642,
            "tpl_dropoff_point_id": 125895205,
            "delivery_type_id": 2,
            "tariff_type": "STANDARD_OZON"
        }


    ]

    for (const data of methods) {

        try {
            const response = await addDeliveryMethod(companyId, data)
            if (response) {
                await activateDeliveryMethod(companyId, response.result.id)
                console.log("添加物流成功:" + data.name)
            }
        } catch {
            console.log("添加物流失败:" + data.name)

        }

    }
}


async function activateDeliveryMethod(companyId, deliveryMethodId) {
    const payload = {
        company_id: companyId,
        delivery_method_id: deliveryMethodId,
    };

    const res = await fetch(
        "https://seller.ozon.ru/api/delivery-method-service/delivery-method/activate",
        {
            method: "POST",
            credentials: "include",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "x-o3-app-name": "seller-ui",
                "x-o3-company-id": String(companyId),
                "x-o3-language": "zh-Hans",
                "x-o3-page-type": "cb-warehouse-other",
            },
            body: JSON.stringify(payload),
        }
    );

    const text = await res.text();
    let data;

    try {
        data = text ? JSON.parse(text) : null;
    } catch {
        data = text;
    }

    if (!res.ok) {
        const error = new Error("配送方式激活失败");
        error.status = res.status;
        error.response = data;
        throw error;
    }

    return data;
}


// 等待setting page 加载完成
const waitSettingPage = () =>
    new Promise((resolve) => {
        const timer = setInterval(() => {
            if (window.__INITIAL_STATE__?.store?.company?.id) {
                clearInterval(timer);
                resolve();
            }
        }, 300);
    });

// 等待/app/crossborder/warehouse?filterType=active 页面加载完成
const waitWarehousePage = () =>
    new Promise((resolve) => {
        const timer = setInterval(() => {
            if (window.__MODULE_STATE__["cb-warehouse"]) {
                clearInterval(timer);
                resolve();
            }
        }, 300);
    });

// 注：这是运行在页面原生环境的脚本（通过 content-script 插入一次）
(async function () {
    // 防止重复安装监听器
    window.__custom_injected = window.__custom_injected || {};
    if (window.__custom_injected.listenerInstalled) return;
    window.__custom_injected.listenerInstalled = true;
    console.info("注入page.js成功")


    // 通过自定义事件触发（可多次触发）
    window.addEventListener('message', async (event) => {

        console.log("page.js 页面执行:",event.data.type)
        if (event.data.type == "CREATE_WAREHOUSE") {
            await waitSettingPage();
            try {
                const companyId = window.__INITIAL_STATE__.store.company.id;
                console.log("companyId:", companyId);

                const warehouseDraftResult = await createWarehouse(companyId)
                if (warehouseDraftResult.error) {
                    alert("创建仓库失败")
                    return
                }
                alert("创建仓库成功,页面即将跳转")
                window.location.href = "https://seller.ozon.ru/app/crossborder/warehouse";
                return

                const warehouseDraftId = warehouseDraftResult.result
                const deliveryData = await createDeliverySelf(companyId, warehouseDraftId)
                await activateDeliveryMethod(companyId, deliveryData.result.id)

            } catch (err) {
                console.error("执行失败:", err);
                alert("执行失败，查看控制台");
            }
        }

        if (event.data.type == "ADD_DELIVERY_METHODS") {
            console.log("test:");

            await waitWarehousePage();
            const warehouseDtos = window.__MODULE_STATE__["cb-warehouse"].cbWarehouseRootStore.cbWarehouseStore.warehouseListStore.warehouseDtos
            console.log("warehouseDtos:", warehouseDtos);

            for (const data of warehouseDtos) {
                await addDeliveryMethods(data.companyId, data.warehouseId)

            }
            try {
            } catch (e) {
                alert("添加物流失败")
            }


        }
    });
})();

