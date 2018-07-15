$(document).ready(function() 
{
    var textAccountStatus = false;
    var textPasswordStatus = false;
    var textComfirmPasswordStatus = false;
    var UserComfirmedPasswordStatus = false;
    
    $('#textAccount').blur(function()
    {
        checkTextAccount();
    })

    $('#textPassword').blur(function()
    {
        checkTextPassword();
    })

    $('#textComfirmPassword').blur(function()
    {
        UserComfirmedPasswordStatus = true;
        checkTextComfirmPassword();
    })

    $('#submitButton').click(function()
    {
        checkTextAccount();
        checkTextPassword();
        UserComfirmedPasswordStatus = true;
        checkTextComfirmPassword();
        
        if ( textAccountStatus && textPasswordStatus && textComfirmPasswordStatus)
        {
            // 通過檢查，可進入下一頁
        }
        else
        {
            // 沒通過檢查
            return false;    
        }

        
    })

    




    function checkTextAccount()
    {       
        var emailRule = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/);
        var result = $('#textAccount').val().match(emailRule);

        if ( result )
        {
            $('#textAccount').removeClass('showWarning');
            $('.textAccountWarning').fadeOut();
            $('.textAccountTooltip').fadeOut();
            textAccountStatus = true;
        } else {
            $('#textAccount').addClass('showWarning');
            $('.textAccountWarning').fadeIn();
            $('.textAccountTooltip').fadeIn();
            textAccountStatus = false;
        }

        checkSubmitBtn();
    }

    function checkTextPassword()
    {   
        if ( $('#textPassword').val().length < 8 )
        {
            $('#textPassword').addClass('showWarning');
            $('.textPasswordWarning').fadeIn();
            $('.textPasswordTooltip').fadeIn();
            textPasswordStatus = false;
        } 
        else 
        {
            $('#textPassword').removeClass('showWarning');
            $('.textPasswordWarning').fadeOut();
            $('.textPasswordTooltip').fadeOut();
            textPasswordStatus = true;
        }
        checkTextComfirmPassword();
    }

    function checkTextComfirmPassword()
    {
        if (UserComfirmedPasswordStatus)
        {
            if ( $('#textPassword').val() === $('#textComfirmPassword').val())
            {
                $('#textComfirmPassword').removeClass('showWarning');
                $('.textComfirmPasswordWarning').fadeOut();
                $('.textComfirmPasswordTooltip').fadeOut();
                textComfirmPasswordStatus = true;
            } 
            else 
            {
                $('#textComfirmPassword').addClass('showWarning');
                $('.textComfirmPasswordWarning').fadeIn();
                $('.textComfirmPasswordTooltip').fadeIn();
                textComfirmPasswordStatus = false;
            }
            
            checkSubmitBtn();
        }
    }

    function checkSubmitBtn()
    {
        if ( textAccountStatus && textPasswordStatus && textComfirmPasswordStatus)
        {
            $('#submitButton').removeClass('dataCheckFail');
        }
        else
        {
            $('#submitButton').addClass('dataCheckFail');
        }
    }

});