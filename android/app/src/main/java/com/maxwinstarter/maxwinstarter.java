package com.maxwinstarter;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import java.util.logging.Logger;
//import android.util.Log;

public class maxwinstarter extends BroadcastReceiver {
    private static Logger logger = Logger.getLogger(maxwinstarter.class.getName());
    private static final String TAG = maxwinstarter.class.getSimpleName();

    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d(TAG, "auto start");

        logger.info("App_Boot");

        Intent newIntent = new Intent(context, MainActivity.class);
        newIntent.setAction("android.intent.action.MAIN");
        newIntent.addCategory("android.intent.category.LAUNCHER");
        newIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(newIntent);
    }

}