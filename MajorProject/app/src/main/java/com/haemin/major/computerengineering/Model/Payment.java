package com.haemin.major.computerengineering.Model;
// 결제 정보
public class Payment {

    // 결제 번호
    private Integer paymentSeq;

    // 결제 제목
    private String paymentTitle;

    // 결제 내용
    private String paymentContents;

    public Integer getPaymentSeq() {
        return paymentSeq;
    }

    public void setPaymentSeq(Integer paymentSeq) {
        this.paymentSeq = paymentSeq;
    }

    public String getPaymentTitle() {
        return paymentTitle;
    }

    public void setPaymentTitle(String paymentTitle) {
        this.paymentTitle = paymentTitle;
    }

    public String getPaymentContents() {
        return paymentContents;
    }

    public void setPaymentContents(String paymentContents) {
        this.paymentContents = paymentContents;
    }

    // Payment 모델 복사
    public void CopyData(Payment param)
    {
        this.paymentSeq = param.getPaymentSeq();
        this.paymentTitle = param.getPaymentTitle();
        this.paymentContents = param.getPaymentContents();
    }
}