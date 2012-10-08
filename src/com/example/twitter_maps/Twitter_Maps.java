package com.example.twitter_maps;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import org.apache.cordova.*;

public class Twitter_Maps extends DroidGap{

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_twitter__maps, menu);
        return true;
    }
}
