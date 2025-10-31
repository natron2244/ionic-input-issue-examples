This is example project to report the following issues when ion-inputs1:

1. iOS Animation -> When clicking on a field that requires scrolling, the place holder gets shift to the left. This is due a https://github.com/ionic-team/ionic-framework/blob/4b5753a4ce69da5cadc2b7ff1d2165bc14274372/core/src/utils/input-shims/hacks/common.ts#L75
<img width="359" height="661" alt="Screenshot 2025-10-31 at 4 51 22 PM" src="https://github.com/user-attachments/assets/89f4152f-5a5b-419e-b95b-89fe910e7cfc" />

2. Android ADA scan duplicate naming issue -> See the below request from the ADA scan:
> The duplicate naming is resolved: when focus reaches the input, TalkBack announces
> -“Username, edit box, enter username” and
> -“Password, edit box, enter password,”which is correct.
> However, focus first lands on the visible label (e.g., “Username”) and only after an additional swipe moves into the editable field. This adds an extra step and creates noisy, two-stop navigation for screen reader users.
> 
> What remains to address
> -Ensure the initial focus lands directly on the editable field (not on a separate, focusable label).
> -Keep the label programmatically associated but not separately focusable.

3. Android ADA scan password toogle issue -> See the below request from the ADA scan:
> TalkBack currently announces the control as “On, Show Password” and “Off, Hide Password.”
> While both phrases are technically descriptive, combining a state (on/off) with an action (show/hide) results in confusing and redundant output for screen reader users.
> 
> Users may interpret “On” as meaning the control itself is active rather than the password being visible, making it unclear what will happen if they activate it again.
> 
> Expected behavior
> The control should announce only one clear, action-based phrase that reflects what it will do when activated:
> -“Show password, button.”
> -“Hide password, button.”
