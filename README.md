Blazor Input Mask

(https://71dhfa.am.files.1drv.com/y4pCpNe1-WEiJFwGOiSj9colrnZu4uukGTNbj6eMFio-gx2bqkIXXGEG33YI6293wCMCN0PsREO0Li6OyIelviyWjvmWw6jMLHiH56D77qQghH3NZzS1ajT0pClMCGF39EqIR8YnY6dj1-wg6D-4hX32px6UNk9_I9Esv3aNK1zE9kiv-xZjr_Kq77EyWUmrtBXNoDR--pv7jBgK9UXSyJXWg/BlazorInputMask.gif&psid=1)

Nuget Package : 

Install-Package BlazorInputMask

Blazor Input Mask (based on https://imask.js.org/)

Use like that:

<EditForm Model="..

<InputMask @bind-Value="user.Telephone" class="form-control" data-mask="00.00.00.00.00" placeholder="Phone No" />

In your _Host.cshtml or Index.html file:

<script src="_content/BlazorInputMask/Main.js"></script><br/>

<script src="_content/BlazorInputMask/IMask.js"></script>
