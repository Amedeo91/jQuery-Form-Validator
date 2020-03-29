/** File generated by Grunt -- do not modify
 *  JQUERY-FORMS-VALIDATOR
 *
 *  @version 2.3.82
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a,b){"use strict";a.formUtils.registerLoadedModule("lang/ko"),a(b).bind("validatorsLoaded",function(){a.formUtils.LANG={errorTitle:"이 양식은 보낼 수 없습니다!",requiredField:"필수 입력란입니다.",requiredFields:"모든 필수 입력란을 입력해야 합니다.",badTime:"시간을 정확하게 입력하지 않았습니다.",badEmail:"e-mail을 정확하게 입력하지 않았습니다.",badTelephone:"전화번호를 정확하게 입력하지 않았습니다.",badSecurityAnswer:"보안 입력을 정확하게 입력하지 않았습니다.",badDate:"날짜를 정확하게 입력하지 않았습니다.",lengthBadStart:"입력 값은 ",lengthBadEnd:" 사이의 문자여야 합니다.",lengthTooLongStart:"입력 값의 길이가 ",lengthTooLongEnd:" 보다 깁니다.",lengthTooShortStart:"입력 값의 길이가 ",lengthTooShortEnd:" 보다 짧습니다.",notConfirmed:"입력 값이 일치하지 않습니다.",badDomain:"도메인을 정확하게 입력하지 않았습니다.",badUrl:"URL을 정확하게 입력하지 않았습니다.",badCustomVal:"입력 값이 정확하지 않습니다.",badInt:"입력 값이 숫자가 아닙니다.",badSecurityNumber:"주민등록번호가 정확하지 않습니다.",badStrength:"암호를 더 복잡하게 조합해야 합니다.",badNumberOfSelectedOptionsStart:"최소한 ",badNumberOfSelectedOptionsEnd:" 개 항목 이상을 선택해야 합니다.",badAlphaNumeric:"입력 값은 문자와 숫자만 허용합니다.",badAlphaNumericAndExtra:"입력 값은 문자와 숫자와 ",badAlphaNumericExtra:" 만 허용합니다.",badAlphaNumericAndExtraAndSpaces:"입력 값은 문자와 숫자와 ",andSpaces:" 와 빈문자(spaces)만 허용합니다. ",wrongFileSize:"업로드 하려고 하는 파일의 크기가 너무 큽니다. (최대 %s)",wrongFileType:"파일 타입은 %s 만 허용합니다.",groupCheckedRangeStart:"",groupCheckedEnd:" 개 항목을 선택해야 합니다.",groupCheckedTooFewStart:"최소한 ",groupCheckedTooFewEnd:" 개 항목 이상을 선택해야 합니다.",groupCheckedTooManyStart:"",groupCheckedTooManyEnd:" 개 항목 이하를 선택해야 합니다.",badCreditCard:"신용카드번호를 정확하지 않습니다.",badCVV:"CVV 번호가 정확하지 않습니다.",wrongFileDim:"잘못된 이미지 크기 ,",imageTooTall:"이미지 길이가 ",imageTooTallEnd:" 보다 길어야 합니다.",imageTooWide:"이미지 넓이가 ",imageTooWideEnd:" 보다 넓어야 합니다.",imageTooSmall:"이미지 크기가 너무 작습니다.",min:"min",max:"max",imageRatioNotAccepted:"이미지 비율이 맞지 않습니다."}})}(a,window)});