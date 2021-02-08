#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { EipStack } from "../lib/week1/eip";
import { EbsStack } from "../lib/week1/ebs";
import { CliStack } from "../lib/week1/cli";
import { SslStack } from "../lib/week2/ssl";
import { ElbStack } from "../lib/week2/elb";
import { AsgStack } from "../lib/week2/asg";
import { SqsStack } from "../lib/week2/sqs";
import { ColorStack } from "../lib/week2/color";
import { VpcStack } from "../lib/week3/vpc";
import { TransitStack } from "../lib/week3/transit";
import { PresignedStack } from "../lib/week5/presigned";
import { VPCEndpointStack } from "../lib/week5/vpc-endpoint";

const app = new cdk.App();
new EipStack(app, "eip");
new EbsStack(app, "ebs");
new CliStack(app, "cli");
new SslStack(app, "ssl");
new ElbStack(app, "elb");
new AsgStack(app, "asg");
new SqsStack(app, "sqs");
new ColorStack(app, "color");
new VpcStack(app, "vpc");
new TransitStack(app, "transit");
new PresignedStack(app, "presigned");
new VPCEndpointStack(app, "vpcendpoint");
