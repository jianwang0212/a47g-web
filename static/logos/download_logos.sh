#!/bin/bash

# Tech Companies
curl -L "https://logo.clearbit.com/apple.com" -o apple.png 2>/dev/null || echo "Failed: Apple"
curl -L "https://logo.clearbit.com/microsoft.com" -o microsoft.png 2>/dev/null || echo "Failed: Microsoft"
curl -L "https://logo.clearbit.com/google.com" -o google.png 2>/dev/null || echo "Failed: Google"
curl -L "https://logo.clearbit.com/amazon.com" -o amazon.png 2>/dev/null || echo "Failed: Amazon"
curl -L "https://logo.clearbit.com/meta.com" -o meta.png 2>/dev/null || echo "Failed: Meta"
curl -L "https://logo.clearbit.com/tesla.com" -o tesla.png 2>/dev/null || echo "Failed: Tesla"
curl -L "https://logo.clearbit.com/nvidia.com" -o nvidia.png 2>/dev/null || echo "Failed: NVIDIA"
curl -L "https://logo.clearbit.com/alibaba.com" -o alibaba.png 2>/dev/null || echo "Failed: Alibaba"
curl -L "https://logo.clearbit.com/tencent.com" -o tencent.png 2>/dev/null || echo "Failed: Tencent"
curl -L "https://logo.clearbit.com/bytedance.com" -o bytedance.png 2>/dev/null || echo "Failed: ByteDance"
curl -L "https://logo.clearbit.com/netflix.com" -o netflix.png 2>/dev/null || echo "Failed: Netflix"
curl -L "https://logo.clearbit.com/oracle.com" -o oracle.png 2>/dev/null || echo "Failed: Oracle"

# Financial Institutions
curl -L "https://logo.clearbit.com/goldmansachs.com" -o goldman-sachs.png 2>/dev/null || echo "Failed: Goldman Sachs"
curl -L "https://logo.clearbit.com/morganstanley.com" -o morgan-stanley.png 2>/dev/null || echo "Failed: Morgan Stanley"
curl -L "https://logo.clearbit.com/jpmorgan.com" -o jpmorgan.png 2>/dev/null || echo "Failed: JPMorgan"
curl -L "https://logo.clearbit.com/blackrock.com" -o blackrock.png 2>/dev/null || echo "Failed: BlackRock"
curl -L "https://logo.clearbit.com/vanguard.com" -o vanguard.png 2>/dev/null || echo "Failed: Vanguard"
curl -L "https://logo.clearbit.com/citadel.com" -o citadel.png 2>/dev/null || echo "Failed: Citadel"
curl -L "https://logo.clearbit.com/bridgewater.com" -o bridgewater.png 2>/dev/null || echo "Failed: Bridgewater"
curl -L "https://logo.clearbit.com/rentec.com" -o renaissance.png 2>/dev/null || echo "Failed: Renaissance"

# Universities
curl -L "https://logo.clearbit.com/uq.edu.au" -o uq.png 2>/dev/null || echo "Failed: UQ"
curl -L "https://logo.clearbit.com/ox.ac.uk" -o oxford.png 2>/dev/null || echo "Failed: Oxford"
curl -L "https://logo.clearbit.com/berklee.edu" -o berklee.png 2>/dev/null || echo "Failed: Berklee"

echo "Download complete!"
