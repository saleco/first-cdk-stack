import * as cdk from 'aws-cdk-lib';
import { CfnOutput, Duration, CfnParameter } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const duration = new CfnParameter(this, 'duration', {
      type: 'Number',
      default: 6,
      minValue: 1,
      maxValue: 10
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'FirstCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const myBucket = new Bucket(this, 'someBucket', {
      lifecycleRules: [
        {
          expiration: Duration.days(duration.valueAsNumber)
        }
      ]
    })

    new CfnOutput(this, 'my-bucket', {
      value: myBucket.bucketName
    })
  }
}
