// pages/convert/convert.js

var EutraBandDlNoffs = {
  EUTRA_BAND_1 : 0, 
  EUTRA_BAND_2 : 600,  
  EUTRA_BAND_3 : 1200, 
  EUTRA_BAND_4 : 1950, 
  EUTRA_BAND_5 : 2400, 
  EUTRA_BAND_7 : 2750, 
  EUTRA_BAND_8 : 3450, 
  EUTRA_BAND_9 : 3800, 
  EUTRA_BAND_10 : 4150,
  EUTRA_BAND_11 : 4750,
  EUTRA_BAND_12 : 5010,
  EUTRA_BAND_13 : 5180,
  EUTRA_BAND_14 : 5280,
  EUTRA_BAND_17 : 5730,
  EUTRA_BAND_18 : 5850,
  EUTRA_BAND_19 : 6000,
  EUTRA_BAND_20 : 6150,
  EUTRA_BAND_21 : 6450,
  EUTRA_BAND_22 : 6600,
  EUTRA_BAND_23 : 7500,
  EUTRA_BAND_24 : 7700,
  EUTRA_BAND_25 : 8040,
  EUTRA_BAND_28 : 9210,
  EUTRA_BAND_33 : 36000,
  EUTRA_BAND_34 : 36200,
  EUTRA_BAND_35 : 36350,
  EUTRA_BAND_36 : 36950,
  EUTRA_BAND_37 : 37550,
  EUTRA_BAND_38 : 37750,
  EUTRA_BAND_39 : 38250,
  EUTRA_BAND_40 : 38650,
  EUTRA_BAND_41 : 39650,
  EUTRA_BAND_43 : 43590,
  EUTRA_BAND_47 : 54540
}

var EutraBandUlNoffs = {
  EUTRA_BAND_1 : 18000,
  EUTRA_BAND_2 : 18600,
  EUTRA_BAND_3 : 19200,
  EUTRA_BAND_4 : 19950,
  EUTRA_BAND_5 : 20400,
  EUTRA_BAND_7 : 20750,
  EUTRA_BAND_8 : 21450,
  EUTRA_BAND_9 : 21800,
  EUTRA_BAND_10 : 22150,
  EUTRA_BAND_11 : 22750,
  EUTRA_BAND_12 : 23010,
  EUTRA_BAND_13 : 23180,
  EUTRA_BAND_14 : 23280,
  EUTRA_BAND_17 : 23730,
  EUTRA_BAND_18 : 23850,
  EUTRA_BAND_19 : 24000,
  EUTRA_BAND_20 : 24150,
  EUTRA_BAND_21 : 24450,
  EUTRA_BAND_22 : 24600,
  EUTRA_BAND_23 : 25500,
  EUTRA_BAND_24 : 25700,
  EUTRA_BAND_25 : 26040,
  EUTRA_BAND_28 : 27210,
  EUTRA_BAND_33 : 36000,
  EUTRA_BAND_34 : 36200,
  EUTRA_BAND_35 : 36350,
  EUTRA_BAND_36 : 36950,
  EUTRA_BAND_37 : 37550,
  EUTRA_BAND_38 : 37750,
  EUTRA_BAND_39 : 38250,
  EUTRA_BAND_40 : 38650,
  EUTRA_BAND_41 : 39650,
  EUTRA_BAND_43 : 43590,
  EUTRA_BAND_47 : 54540
}

var EutraBandFreqDlLow = {
  EUTRA_BAND_1 : 21100,
  EUTRA_BAND_2 : 19300,
  EUTRA_BAND_3 : 18050,
  EUTRA_BAND_4 : 21100,
  EUTRA_BAND_5 : 8690,
  EUTRA_BAND_7 : 26200,
  EUTRA_BAND_8 : 9250,
  EUTRA_BAND_9 : 18449,
  EUTRA_BAND_10 : 21100,
  EUTRA_BAND_11 : 14759,
  EUTRA_BAND_12 : 7290,
  EUTRA_BAND_13 : 7460,
  EUTRA_BAND_14 : 7580,
  EUTRA_BAND_17 : 7340,
  EUTRA_BAND_18 : 8600,
  EUTRA_BAND_19 : 8750,
  EUTRA_BAND_20 : 7910,
  EUTRA_BAND_21 : 14959,
  EUTRA_BAND_22 : 35100,
  EUTRA_BAND_23 : 21800,
  EUTRA_BAND_24 : 15250,
  EUTRA_BAND_25 : 19300,
  EUTRA_BAND_28 : 7580,
  EUTRA_BAND_33 : 19000,
  EUTRA_BAND_34 : 20100,
  EUTRA_BAND_35 : 18500,
  EUTRA_BAND_36 : 19300,
  EUTRA_BAND_37 : 19100,
  EUTRA_BAND_38 : 25700,
  EUTRA_BAND_39 : 18800,
  EUTRA_BAND_40 : 23000,
  EUTRA_BAND_41 : 24960,
  EUTRA_BAND_43 : 36000,
  EUTRA_BAND_47 : 58550
}
var EutraBandFreqDlHigh = {
  EUTRA_BAND_1 : 21700,
  EUTRA_BAND_2 : 19900,
  EUTRA_BAND_3 : 18800,
  EUTRA_BAND_4 : 21550,
  EUTRA_BAND_5 : 8940,
  EUTRA_BAND_7 : 26900,
  EUTRA_BAND_8 : 9600,
  EUTRA_BAND_9 : 18799,
  EUTRA_BAND_10 : 21700,
  EUTRA_BAND_11 : 14959,
  EUTRA_BAND_12 : 7460,
  EUTRA_BAND_13 : 7560,
  EUTRA_BAND_14 : 7680,
  EUTRA_BAND_17 : 7460,
  EUTRA_BAND_18 : 8750,
  EUTRA_BAND_19 : 8900,
  EUTRA_BAND_20 : 8210,
  EUTRA_BAND_21 : 15109,
  EUTRA_BAND_22 : 35900,
  EUTRA_BAND_23 : 22000,
  EUTRA_BAND_24 : 15590,
  EUTRA_BAND_25 : 19950,
  EUTRA_BAND_28 : 8030,
  EUTRA_BAND_33 : 19200,
  EUTRA_BAND_34 : 20250,
  EUTRA_BAND_35 : 19100,
  EUTRA_BAND_36 : 19900,
  EUTRA_BAND_37 : 19300,
  EUTRA_BAND_38 : 26200,
  EUTRA_BAND_39 : 19200,
  EUTRA_BAND_40 : 24000,
  EUTRA_BAND_41 : 26900,
  EUTRA_BAND_43 : 38000,
  EUTRA_BAND_47 : 59250
}

var EutraBandEarfcnDlLow = {
  EUTRA_BAND_1 : 0,
  EUTRA_BAND_2 : 600,
  EUTRA_BAND_3 : 1200,
  EUTRA_BAND_4 : 1950,
  EUTRA_BAND_5 : 2400,
  EUTRA_BAND_7 : 2750,
  EUTRA_BAND_8 : 3450,
  EUTRA_BAND_9 : 3800,
  EUTRA_BAND_10 : 4150,
  EUTRA_BAND_11 : 4750,
  EUTRA_BAND_12 : 5010,
  EUTRA_BAND_13 : 5180,
  EUTRA_BAND_14 : 5280,
  EUTRA_BAND_17 : 5730,
  EUTRA_BAND_18 : 5850,
  EUTRA_BAND_19 : 6000,
  EUTRA_BAND_20 : 6150,
  EUTRA_BAND_21 : 6450,
  EUTRA_BAND_22 : 6600,
  EUTRA_BAND_23 : 7500,
  EUTRA_BAND_24 : 7700,
  EUTRA_BAND_25 : 8040,
  EUTRA_BAND_28 : 9210,
  EUTRA_BAND_33 : 36000,
  EUTRA_BAND_34 : 36200,
  EUTRA_BAND_35 : 36350,
  EUTRA_BAND_36 : 36950,
  EUTRA_BAND_37 : 37550,
  EUTRA_BAND_38 : 37750,
  EUTRA_BAND_39 : 38250,
  EUTRA_BAND_40 : 38650,
  EUTRA_BAND_41 : 39650,
  EUTRA_BAND_43 : 43590,
  EUTRA_BAND_47 : 54540
}

var EutraBandEarfcnDlHigh = {
  EUTRA_BAND_1 : 599,
  EUTRA_BAND_2 : 1199,
  EUTRA_BAND_3 : 1949,
  EUTRA_BAND_4 : 2399,
  EUTRA_BAND_5 : 2649,
  EUTRA_BAND_7 : 3449,
  EUTRA_BAND_8 : 3799,
  EUTRA_BAND_9 : 4149,
  EUTRA_BAND_10 : 4749,
  EUTRA_BAND_11 : 4949,
  EUTRA_BAND_12 : 5179,
  EUTRA_BAND_13 : 5279,
  EUTRA_BAND_14 : 5379,
  EUTRA_BAND_17 : 5849,
  EUTRA_BAND_18 : 5999,
  EUTRA_BAND_19 : 6149,
  EUTRA_BAND_20 : 6449,
  EUTRA_BAND_21 : 6599,
  EUTRA_BAND_22 : 7399,
  EUTRA_BAND_23 : 7699,
  EUTRA_BAND_24 : 8039,
  EUTRA_BAND_25 : 8689,
  EUTRA_BAND_28 : 9659,
  EUTRA_BAND_33 : 36199,
  EUTRA_BAND_34 : 36349,
  EUTRA_BAND_35 : 36949,
  EUTRA_BAND_36 : 37549,
  EUTRA_BAND_37 : 37749,
  EUTRA_BAND_38 : 38249,
  EUTRA_BAND_39 : 38649,
  EUTRA_BAND_40 : 39649,
  EUTRA_BAND_41 : 41589,
  EUTRA_BAND_43 : 45589,
  EUTRA_BAND_47 : 55239
}

var EutraBandEarfcnUlLow = {
  EUTRA_BAND_1  : 18000,
  EUTRA_BAND_2  : 18600,
  EUTRA_BAND_3  : 19200,
  EUTRA_BAND_4  : 19950,
  EUTRA_BAND_5  : 20400,
  EUTRA_BAND_7  : 20750,
  EUTRA_BAND_8  : 21450,
  EUTRA_BAND_9  : 21800,
  EUTRA_BAND_10 : 22150,
  EUTRA_BAND_11 : 22750,
  EUTRA_BAND_12 : 23010,
  EUTRA_BAND_13 : 23180,
  EUTRA_BAND_14 : 23280,
  EUTRA_BAND_17 : 23730,
  EUTRA_BAND_18 : 23850,
  EUTRA_BAND_19 : 24000,
  EUTRA_BAND_20 : 24150,
  EUTRA_BAND_21 : 24450,
  EUTRA_BAND_22 : 24600,
  EUTRA_BAND_23 : 25500,
  EUTRA_BAND_24 : 25700,
  EUTRA_BAND_25 : 26040,
  EUTRA_BAND_28 : 27210,
  EUTRA_BAND_33 : 36000,
  EUTRA_BAND_34 : 36200,
  EUTRA_BAND_35 : 36350,
  EUTRA_BAND_36 : 36950,
  EUTRA_BAND_37 : 37550,
  EUTRA_BAND_38 : 37750,
  EUTRA_BAND_39 : 38250,
  EUTRA_BAND_40 : 38650,
  EUTRA_BAND_41 : 39650,
  EUTRA_BAND_43 : 43590,
  EUTRA_BAND_47 : 54540
}

var EutraBandEarfcnUlHigh = {
  EUTRA_BAND_1  : 18599,
  EUTRA_BAND_2  : 19199,
  EUTRA_BAND_3  : 19949,
  EUTRA_BAND_4  : 20399,
  EUTRA_BAND_5  : 20649,
  EUTRA_BAND_7  : 21449,
  EUTRA_BAND_8  : 21799,
  EUTRA_BAND_9  : 22149,
  EUTRA_BAND_10 : 22749,
  EUTRA_BAND_11 : 22949,
  EUTRA_BAND_12 : 23179,
  EUTRA_BAND_13 : 23279,
  EUTRA_BAND_14 : 23379,
  EUTRA_BAND_17 : 23849,
  EUTRA_BAND_18 : 23999,
  EUTRA_BAND_19 : 24149,
  EUTRA_BAND_20 : 24449,
  EUTRA_BAND_21 : 24599,
  EUTRA_BAND_22 : 25399,
  EUTRA_BAND_23 : 25699,
  EUTRA_BAND_24 : 26039,
  EUTRA_BAND_25 : 26689,
  EUTRA_BAND_28 : 27659,
  EUTRA_BAND_33 : 36199,
  EUTRA_BAND_34 : 36349,
  EUTRA_BAND_35 : 36949,
  EUTRA_BAND_36 : 37549,
  EUTRA_BAND_37 : 37749,
  EUTRA_BAND_38 : 38249,
  EUTRA_BAND_39 : 38649,
  EUTRA_BAND_40 : 39649,
  EUTRA_BAND_41 : 41589,
  EUTRA_BAND_43 : 45589,
  EUTRA_BAND_47 : 55239
}

var EutraBandFreqUlLow = {
  EUTRA_BAND_1 : 19200,
  EUTRA_BAND_2 : 18500,
  EUTRA_BAND_3 : 17100,
  EUTRA_BAND_4 : 17100,
  EUTRA_BAND_5 : 8240,
  EUTRA_BAND_7 : 25000,
  EUTRA_BAND_8 : 8800,
  EUTRA_BAND_9 : 17499,
  EUTRA_BAND_10 : 17100,
  EUTRA_BAND_11 : 14279,
  EUTRA_BAND_12 : 6990,
  EUTRA_BAND_13 : 7770,
  EUTRA_BAND_14 : 7880,
  EUTRA_BAND_17 : 7040,
  EUTRA_BAND_18 : 8150,
  EUTRA_BAND_19 : 8300,
  EUTRA_BAND_20 : 8320,
  EUTRA_BAND_21 : 14479,
  EUTRA_BAND_22 : 34100,
  EUTRA_BAND_23 : 20000,
  EUTRA_BAND_24 : 16265,
  EUTRA_BAND_25 : 18500,
  EUTRA_BAND_28 : 7030,
  EUTRA_BAND_33 : 19000,
  EUTRA_BAND_34 : 20100,
  EUTRA_BAND_35 : 18500,
  EUTRA_BAND_36 : 19300,
  EUTRA_BAND_37 : 19100,
  EUTRA_BAND_38 : 25700,
  EUTRA_BAND_39 : 18800,
  EUTRA_BAND_40 : 23000,
  EUTRA_BAND_41 : 24960,
  EUTRA_BAND_43 : 36000,
  EUTRA_BAND_47 : 58550
}
var EutraBandFreqUlHigh = {
  EUTRA_BAND_1 : 19800,
  EUTRA_BAND_2 : 19100,
  EUTRA_BAND_3 : 17850,
  EUTRA_BAND_4 : 17550,
  EUTRA_BAND_5 : 8490,
  EUTRA_BAND_7 : 25700,
  EUTRA_BAND_8 : 9150,
  EUTRA_BAND_9 : 17849,
  EUTRA_BAND_10 : 17700,
  EUTRA_BAND_11 : 14479,
  EUTRA_BAND_12 : 7160,
  EUTRA_BAND_13 : 7870,
  EUTRA_BAND_14 : 7980,
  EUTRA_BAND_17 : 7160,
  EUTRA_BAND_18 : 8300,
  EUTRA_BAND_19 : 8450,
  EUTRA_BAND_20 : 8620,
  EUTRA_BAND_21 : 14629,
  EUTRA_BAND_22 : 34900,
  EUTRA_BAND_23 : 20200,
  EUTRA_BAND_24 : 16605,
  EUTRA_BAND_25 : 19150,
  EUTRA_BAND_28 : 7480,
  EUTRA_BAND_33 : 19200,
  EUTRA_BAND_34 : 20250,
  EUTRA_BAND_35 : 19100,
  EUTRA_BAND_36 : 19900,
  EUTRA_BAND_37 : 19300,
  EUTRA_BAND_38 : 26200,
  EUTRA_BAND_39 : 19200,
  EUTRA_BAND_40 : 24000,
  EUTRA_BAND_41 : 26900,
  EUTRA_BAND_43 : 38000,
  EUTRA_BAND_47 : 59250
}

function checkFreq(dlUlFlag, freq, band) 
{
  console.log(dlUlFlag, freq, band);
  if (dlUlFlag == "DL") 
  {
    if ((freq <= EutraBandFreqDlHigh[band])
        && (freq >= EutraBandFreqDlLow[band])) 
    {
      return true;
    }
  } 
  else 
  {
    if ((freq <= EutraBandFreqUlHigh[band])
        && (freq >= EutraBandFreqUlLow[band])) 
    {
      return true;    
    }
  }
  return false;
}

function freqToEarfcn(dlUlFlag, freq, band) 
{
  var freqLow;
  var noffs;
  
  if (dlUlFlag == "DL")
  {
    freqLow = EutraBandFreqDlLow[band];
    noffs = EutraBandDlNoffs[band];
  }
  else
  {
    freqLow = EutraBandFreqUlLow[band]
    noffs = EutraBandUlNoffs[band]
  }
  return freq - freqLow + noffs;
}

function earfcnToFreq(dlUlFlag, earfcn) 
{
  var earfcnLow;
  var earfcnHigh;
  var freqLow;

  for (var i in EutraBandEarfcnDlLow)
  {
    if (dlUlFlag == "DL")
    {
      earfcnLow = EutraBandEarfcnDlLow[i];
      earfcnHigh = EutraBandEarfcnDlHigh[i];
      freqLow = EutraBandFreqDlLow[i];
    }
    else
    {
      earfcnLow = EutraBandFreqUlLow[i];
      earfcnHigh = EutraBandEarfcnUlHigh[i];
      freqLow = EutraBandFreqUlLow[i];
    }
    console.log(earfcnLow, earfcnHigh, earfcn, i);
    if ((earfcn <= earfcnHigh)
        && (earfcn >= earfcnLow))
    {
      return [true, i, earfcn - earfcnLow + freqLow];
    }
  }
  return [false, "输入绝对信道号有误"];
}

Page({

  /**
   * 页面的初始数据
   */
  data: 
  {
    eutraBand : 
    [
      "EUTRA_BAND_1",
      "EUTRA_BAND_2",
      "EUTRA_BAND_3",
      "EUTRA_BAND_4",
      "EUTRA_BAND_5",
      "EUTRA_BAND_7",
      "EUTRA_BAND_8",
      "EUTRA_BAND_9",
      "EUTRA_BAND_10",
      "EUTRA_BAND_11",
      "EUTRA_BAND_12",
      "EUTRA_BAND_13",
      "EUTRA_BAND_14",
      "EUTRA_BAND_17",
      "EUTRA_BAND_18",
      "EUTRA_BAND_19",
      "EUTRA_BAND_20",
      "EUTRA_BAND_21",
      "EUTRA_BAND_22",
      "EUTRA_BAND_23",
      "EUTRA_BAND_24",
      "EUTRA_BAND_25",
      "EUTRA_BAND_28",
      "EUTRA_BAND_33",
      "EUTRA_BAND_34",
      "EUTRA_BAND_35",
      "EUTRA_BAND_36",
      "EUTRA_BAND_37",
      "EUTRA_BAND_38",
      "EUTRA_BAND_39",
      "EUTRA_BAND_40",
      "EUTRA_BAND_41",
      "EUTRA_BAND_43",
      "EUTRA_BAND_47"
    ],
    dlUlFlag : ["DL", "UL"],
    type : ["FreqToEarfcn", "EarfcnToFreq"],
    typeIndex : 0,
    linkIndex : 0,
    bandIndex : 0
  },

  convert: function (e) 
  {
    var earfcn;
    var output;
    console.log(e);
    
    if (this.data.type[e.detail.value.type] == "EarfcnToFreq")
    {
      output = earfcnToFreq(this.data.dlUlFlag[e.detail.value.link],
               Number(e.detail.value.freqOrEarfcn));
      if (output[0] == true)
      {
        this.setData({text: "频段：" + output[1] + "频点：" + output[2]});
      }
      else
      {
        this.setData({text: output[1]});
      }
    }
    else
    {
      if (false == checkFreq(this.data.dlUlFlag[e.detail.value.link],
                Number(e.detail.value.freqOrEarfcn),
                this.data.eutraBand[e.detail.value.band]))
      {
        this.setData({text: "输入频点有误"});
        return;
      }
      earfcn = freqToEarfcn(this.data.dlUlFlag[e.detail.value.link],
                  Number(e.detail.value.freqOrEarfcn),
                  this.data.eutraBand[e.detail.value.band]);
      this.setData({text: earfcn});
      return;
    }
  },

  bindLinkPickerChange: function (e) 
  {
    console.log(e);
    this.setData({linkIndex: e.detail.value});
  },
  bindBandPickerChange: function (e) 
  {
    console.log(e);
    this.setData({bandIndex: e.detail.value});
  },
  bindTypePickerChange: function (e) 
  {
    console.log(e);
    this.setData({typeIndex: e.detail.value});
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})