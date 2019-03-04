@component('mail::message')
# Change Password Request

Click ons the button below to change password.

@component('mail::button', ['url' => 'http://localhost:4200/response-reset-password?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
