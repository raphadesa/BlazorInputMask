Blazor Input Mask

Nuget Package : 

Install-Package BlazorInputMask

Blazor Input Mask (based on https://imask.js.org/)

Use like that:

<EditForm Model="..

<InputMask @bind-Value="user.Telephone" class="form-control" data-mask="00.00.00.00.00" placeholder="Phone No" />

In your _Host.cshtml or Index.html file:

<script src="_content/BlazorInputMask/Main.js"></script><br/>

<script src="_content/BlazorInputMask/IMask.js"></script>
