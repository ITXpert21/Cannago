/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "Firebase.h"
#import "FirebasePushNotifications.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <GoogleMaps/GoogleMaps.h>
#import "RNFirebaseMessaging.h"
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
   //[GMSServices provideAPIKey:@"AIzaSyDUNefWU4FzLHhoSaS7Wyb-VE2LvNDf3bs"];
  [GMSServices provideAPIKey:@"AIzaSyB8nm4Avunu0rENuo2tpWgV8jKUKLFbESw"];
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"Cannago"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  [FIRApp configure];
  [FirebasePushNotifications configure];
  return YES;
}
- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification {
[[FirebasePushNotifications instance] didReceiveLocalNotification:notification];
}
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(nonnull NSDictionary *)userInfo
                                                    fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler{
[[FirebasePushNotifications instance] didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}
- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {

[[RNFirebaseMessaging instance] didRegisterUserNotificationSettings:notificationSettings];
}
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
