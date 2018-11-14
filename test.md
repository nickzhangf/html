
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->




# 接口文档

## A 1  摄像头列表

### 功能描述

> 查询摄像头列表

### URL

> /dev/camera/list

### 请求方式

> POST

### Content-Type

> application/json

### 请求参数

| 变量名   | 必填  | 类型   | 描述         |
| :-------- | :----- | :------ | :------------ |
| name     | false | string | 摄像头名称   |
| code     | false | string | 摄像头编码    |
| ip       | false | string | ip地址       |
| serverIp | false | string | 服务器ip地址 |

### 响应参数

| 变量名    | 类型   | 描述                           |
| :--------- | :------ | :------------------------------ |
| code      | number | 0:成功，其他：失败消息代号     |
| resultMsg | string | 成功：操作成功，失败：错误信息 |
| list      | object | 数据列表                       |
| +name     | string | 摄像头名称                     |
| +code     | string | 摄像头编码                     |
| +ip       | string | ip地址                         |
| +serverIp | string | 服务器ip地址                   |

### 请求示例

> /dev/camera/list

```json
{
  "name": "入口摄像头"
}
```

### 返回示例

```json
{
    "code": 0,
    "resultMsg":"操作成功",
    "list": [
        {
            "name":"超市入口",
            "code":"csrk",
            "ip":"192.168.0.100",
            "serverIp":"192.168.0.108"
        }
    ]
}
```
