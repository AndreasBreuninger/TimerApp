package com.tns.broadcastreceivers;

@com.tns.JavaScriptImplementation(javaScriptFile = "./broadcastreceivers/NotificationServiceStarterReceiver.js")
public class NotificationServiceStarterReceiver extends android.content.BroadcastReceiver implements com.tns.NativeScriptHashCodeProvider {
	public NotificationServiceStarterReceiver(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onReceive(android.content.Context param_0, android.content.Intent param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onReceive", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
