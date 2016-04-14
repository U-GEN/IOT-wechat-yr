/**
 * Created by CJLIU on 2015/10/16.
 */

var appId = '054a6a8a-e20d-43b1-8483-4ca28c1eaca6';
var appKey = '46b2d44a5540a492f8803a649e0375e9';
var devAccessToken = '541b01ef-22ed-493f-9f7b-0d4446f19f4c';
// 测试环境
// var appId = '97256c69-6723-43fb-87dc-167eaf9dc501';
// var appKey = 'f98d773200d3c8e15a52f972656dd4df';

//自动刷新列表间隔时间
var reloadInterval = 2000;
// 刷新列表次数
var maxReloadTimers = 5;

// 设备主控页面所需
//用于loading时X秒内未链接则弹出提示
var loadingTime = 20000;
//用于调温按钮X秒内无操作则上发数据
var setTimer = 2000;
var errMsg = ["无故障", "水泵或电磁阀故障", "温度传感器A故障", "水位低", "温度传感器B故障", "加热管自动保护","WiFi不匹配"];