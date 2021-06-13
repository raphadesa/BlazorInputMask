Blazor Input Mask

![](https://71dhfa.am.files.1drv.com/y4mg_oke1rtEzv6OK0aeJHVm9oiTMPcv9SdNA2wSo7ppyzfpT_809MDNljRRP0NUNIAd0uTfkOPhLN8OP2FitMwxV2QoaYEcku1LIRKReqj5gCEQXfCqHPvzEM5z-URuqngkwnV9P6JwLEpO_XA5CBj_yLUk9qcCjjHcYOb50i-QiO2s7M8fAAqf0_MM8HlwBbJQ5rB3YDpLVrvcf47Z7Td0g/BlazorInputMask.gif?psid=1)

11-19-2020 : Upgraded to .NET 5 - DEPRECATED PARAMETER: ValidateOnKeyPress

Nuget Package : https://www.nuget.org/packages/BlazorInputMask/

Install-Package BlazorInputMask

Blazor Input Mask (based on https://imask.js.org/)

Use like that:

<EditForm Model="..

<InputMask @bind-Value="user.Telephone" class="form-control" data-mask="00.00.00.00.00" placeholder="Phone No" />

In your _Host.cshtml or Index.html file:

<script src="_content/BlazorInputMask/Main.js"></script><br/>

<script src="_content/BlazorInputMask/IMask.js"></script><br/><br/>

You can also have the possibility to set an id to the mask (optional), and also retrieve the unmasked value.

Additional help in the demo code here : 

https://github.com/raphadesa/BlazorInputMask/blob/master/BlazorInputMask/Pages/Index.razor

06-13-2021 : RegEx support
                                               
Usage : (RegEx must start and end with a slash '/')
                                               
<InputMask @bind-Value="user.Telephone" class="form-control" data-mask="/^\d+$/" placeholder="Phone No" />
