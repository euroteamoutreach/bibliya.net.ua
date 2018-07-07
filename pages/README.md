# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and create the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

## 301 Redirects

This is a complete list of the legacy routes from the old php version of bibliya.net.ua.

- http://www.bibliya.net.ua/video.php
- http://www.bibliya.net.ua/kurs_bibliyi.php
- http://www.bibliya.net.ua/dobro_zlo.php
- http://www.bibliya.net.ua/pro_nas.php
- http://www.bibliya.net.ua/audio/ (no redirect needed for this route)
- http://www.bibliya.net.ua/files/symvol-viry.pdf

The following code is needed in order to provide the proper 301 redirects for legacy routes.

```
<RoutingRules>
  <!-- http://www.bibliya.net.ua/video.php -->
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>video.php</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <HostName>pysannya.com.ua</HostName>
      <ReplaceKeyWith></ReplaceKeyWith>
      <HttpRedirectCode>301</HttpRedirectCode>
    </Redirect>
  </RoutingRule>

  <!-- http://www.bibliya.net.ua/kurs_bibliyi.php -->
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>kurs_bibliyi.php</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <ReplaceKeyWith></ReplaceKeyWith>
      <HttpRedirectCode>301</HttpRedirectCode>
    </Redirect>
  </RoutingRule>

  <!-- http://www.bibliya.net.ua/dobro_zlo.php -->
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>dobro_zlo.php</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <HostName>dobroizlo.com.ua</HostName>
      <Protocol>https</Protocol>
      <ReplaceKeyWith></ReplaceKeyWith>
      <HttpRedirectCode>301</HttpRedirectCode>
    </Redirect>
  </RoutingRule>

  <!-- http://www.bibliya.net.ua/pro_nas.php -->
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>pro_nas.php</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <ReplaceKeyWith>pro-nas/</ReplaceKeyWith>
      <HttpRedirectCode>301</HttpRedirectCode>
    </Redirect>
  </RoutingRule>

  <!-- http://www.bibliya.net.ua/files/symvol-viry.pdf -->
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>files/symvol-viry.pdf</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <HostName>d2ppgd6w5akw3v.cloudfront.net</HostName>
      <Protocol>https</Protocol>
      <ReplaceKeyWith>pdf/symvol-viry.pdf</ReplaceKeyWith>
      <HttpRedirectCode>301</HttpRedirectCode>
    </Redirect>
  </RoutingRule>
</RoutingRules>
```

**Reference**

- http://docs.aws.amazon.com/AmazonS3/latest/dev/HowDoIWebsiteConfiguration.html#configure-bucket-as-website-routing-rule-syntax
- http://stackoverflow.com/a/17856520/655204
