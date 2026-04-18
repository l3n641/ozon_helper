export async function createWarehouse(companyId) {
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


export async function addDeliveryMethod(companyId, postData) {


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

export async function addDeliveryMethods(companyId, warehouseDraftId, deliveryData) {
    for (const data of deliveryData) {
        try {
            const postData = {...data, company_id: companyId, warehouse_id: warehouseDraftId};
            const response = await addDeliveryMethod(companyId, postData)
            if (response) {
                await activateDeliveryMethod(companyId, response.result.id)
                console.log("添加物流成功:" + data.name)
            }
        } catch {
            console.log("添加物流失败:" + data.name)
        }

    }
}


export async function activateDeliveryMethod(companyId, deliveryMethodId) {
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

